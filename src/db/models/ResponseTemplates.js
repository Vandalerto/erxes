import mongoose from 'mongoose';
import Random from 'meteor-random';

const ResponseTemplateSchema = mongoose.Schema({
  _id: {
    type: String,
    unique: true,
    default: () => Random.id(),
  },
  name: String,
  content: String,
  brandId: String,
  files: {
    type: Array,
  },
});

class ResponseTemplate {
  /**
   * Update response template
   * @param  {String} _id - response template id
   * @param  {Object} fields - response template fields
   * @return {Promise} Update response template object
   */
  static async updateResponseTemplate(_id, fields) {
    await ResponseTemplates.update({ _id }, { $set: { ...fields } });

    return ResponseTemplates.findOne({ _id });
  }

  /**
   * Delete response template
   * @param  {String} _id - response template id
   * @return {Promise}
   */
  static async removeResponseTemplate(_id) {
    const responseTemplateObj = await ResponseTemplates.findOne({ _id });

    if (!responseTemplateObj) {
      throw new Error(`Response template not found with id ${_id}`);
    }

    return responseTemplateObj.remove();
  }
}

ResponseTemplateSchema.loadClass(ResponseTemplate);

const ResponseTemplates = mongoose.model('response_templates', ResponseTemplateSchema);

export default ResponseTemplates;
