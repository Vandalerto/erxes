import { google } from 'googleapis';
import * as request from 'request';
import { ActivityLogs, Integrations } from '../db/models';
import { getOauthClient } from './googleTracker';
import { Credentials } from 'google-auth-library/build/src/auth/credentials';
import * as PubSub from '@google-cloud/pubsub';

interface IMailParams {
  integrationId: string;
  cocType: string;
  cocId: string;
  subject: string;
  body: string;
  toEmails: string;
  cc: string;
  bcc: string;
  attachments: string[];
}

/**
 * Get file by url into fileStream buffer
 */
const getInBufferAttachFile = (url: string) =>
  new Promise((resolve, reject) =>
    request.get({ url, encoding: null }, (error, response, body) => {
      if (error) {
        reject(error);
      }

      resolve({
        body,
        contentLength: response.headers['content-length'],
        contentType: response.headers['content-type'],
      });
    }),
  );

/**
 * Create string sequence that generates email body encrypted to base64
 */
const encodeEmail = async (
  toEmail: string,
  fromEmail: string,
  subject: string,
  body: string,
  attachments?: string[],
  ccEmails?: string,
  bccEmails?: string,
) => {
  const utf8Subject = `=?utf-8?B?${Buffer.from(subject).toString('base64')}?=`;

  let rawEmail = [
    'Content-Type: multipart/mixed; boundary="erxes"',
    'MIME-Version: 1.0',
    `From: ${fromEmail}`,
    `To: ${toEmail}`,
    `Cc: ${ccEmails || ''}`,
    `Bcc: ${bccEmails || ''}`,
    `Subject: ${utf8Subject}`,
    '',
    '--erxes',
    'Content-Type: text/plain; charset="UTF-8"',
    'MIME-Version: 1.0',
    'Content-Transfer-Encoding: 7bit',
    '',
    body,
    '',
  ].join('\r\n');

  if (attachments) {
    for (const attachmentUrl of attachments) {
      const attach: any = await getInBufferAttachFile(attachmentUrl);
      const splitedUrl = attachmentUrl.split('/');
      const fileName = splitedUrl[splitedUrl.length - 1];

      rawEmail += [
        '--erxes',
        `Content-Type: ${attach.contentType}`,
        'MIME-Version: 1.0',
        `Content-Length: ${attach.contentLength}`,
        'Content-Transfer-Encoding: base64',
        `Content-Disposition: attachment; filename="${fileName}"`,
        '',
        attach.body.toString('base64'),
        '',
      ].join('\r\n');
    }
  }

  rawEmail += '--erxes--\r\n';

  return Buffer.from(rawEmail)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
};

/**
 * Send email & create activiy log with gmail kind
 */
export const sendGmail = async (mailParams: IMailParams, userId: string) => {
  const { integrationId, subject, body, toEmails, cc, bcc, attachments, cocType, cocId } = mailParams;

  const integration = await Integrations.findOne({ _id: integrationId });

  if (!integration || !integration.gmailData) {
    throw new Error(`Integration not found id with ${integrationId}`);
  }

  const fromEmail = integration.gmailData.email;

  const auth = getOauthClient('gmail');

  auth.setCredentials(integration.gmailData.credentials);

  const gmail: any = await google.gmail('v1');

  const raw = await encodeEmail(toEmails, fromEmail, subject, body, attachments, cc, bcc);

  return new Promise((resolve, reject) => {
    const data = {
      auth,
      userId: 'me',
      resource: {
        raw,
      },
    };

    gmail.users.messages.send(data, (err, response) => {
      if (err) {
        reject(err);
      }

      // Create activity log for send gmail
      ActivityLogs.createGmailLog(subject, cocType, cocId, userId, integrationId);

      resolve(response);
    });
  });
};

/**
 * Get permission granted email information
 */
export const getGmailUserProfile = async (
  credentials: Credentials,
): Promise<{ emailAddress?: string; historyId?: string }> => {
  const auth = getOauthClient('gmail');

  auth.setCredentials(credentials);

  const gmail: any = await google.gmail('v1');

  return new Promise((resolve, reject) => {
    gmail.users.getProfile({ auth, userId: 'me' }, (err, response) => {
      if (err) {
        reject(err);
      }

      resolve(response.data);
    });
  });
};

/**
 * Get gmail history list
 */
export const getGmailHistoryList = async (integrationId: string): Promise<{ history: JSON }> => {
  const integration = await Integrations.findOne({ _id: integrationId });

  if (!integration || !integration.gmailData) {
    throw new Error('Integration not found');
  }

  const auth = getOauthClient('gmail');

  auth.setCredentials(integration.gmailData.credentials);

  const gmail: any = await google.gmail('v1');

  return gmail.users.history.list({
    auth,
    userId: 'me',
    startHistoryId: integration.gmailData.historyId,
  });
};

/**
 * Get gmail latest updates
 */
export const getGmailLatestUpdates = async (integrationId: string): Promise<{ history: JSON }> => {
  const integration = await Integrations.findOne({ _id: integrationId });

  if (!integration || !integration.gmailData) {
    throw new Error('Integration not found');
  }

  const auth = getOauthClient('gmail');

  auth.setCredentials(integration.gmailData.credentials);

  const gmail: any = await google.gmail('v1');

  const { GOOGLE_TOPIC } = process.env;

  return gmail.users.watch({
    auth,
    userId: 'me',
    requestBody: {
      topicName: GOOGLE_TOPIC,
    },
  });
};

export const googlePushNotifiction = () => {
  const { GOOGLE_APPLICATION_CREDENTIALS, GOOGLE_TOPIC, GOOGLE_SUPSCRIPTION_NAME, GOOGLE_PROJECT_ID } = process.env;

  const pubsubClient = PubSub({
    projectId: GOOGLE_PROJECT_ID,
    keyFilename: GOOGLE_APPLICATION_CREDENTIALS,
  });

  if (!GOOGLE_TOPIC) {
    throw new Error('GOOGLE_TOPIC variable not found in env');
  }

  if (!GOOGLE_SUPSCRIPTION_NAME) {
    throw new Error('GOOGLE_SUPSCRIPTION_NAME variable not found in env');
  }

  // Reference a topic that has been previously created.
  var topic = pubsubClient.topic(GOOGLE_TOPIC);

  // Subscribe to the topic.
  topic.createSubscription(GOOGLE_SUPSCRIPTION_NAME, (error, subscription) => {
    const onError = err => {
      console.log('--------error---------');
      console.log(err);
    };

    const onMessage = message => {
      console.log('--------message---------');
      console.log(message);
    };

    if (error) {
      subscription.removeListener('message', onMessage);
      subscription.removeListener('error', onError);
      throw new Error('error occured');
    }
    // Register listeners to start pulling for messages.

    subscription.on('error', onError);
    subscription.on('message', onMessage);

    // Remove listeners to stop pulling for messages.
  });
};
