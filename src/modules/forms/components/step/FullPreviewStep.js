import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { EmbeddedPreview, PopupPreview, ShoutboxPreview } from './preview';
import {
  FlexItem,
  Preview,
  ResolutionTabs,
  DesktopPreview,
  TabletPreview,
  MobilePreview,
  Tabs,
  CarouselSteps,
  CarouselInner
} from './style';

const propTypes = {
  type: PropTypes.string,
  calloutTitle: PropTypes.string,
  btnText: PropTypes.string,
  bodyValue: PropTypes.string,
  color: PropTypes.string,
  theme: PropTypes.string,
  image: PropTypes.string,
  preview: PropTypes.string,
  onChange: PropTypes.func,
  fields: PropTypes.array,
  integration: PropTypes.object,
  carousel: PropTypes.string,
  thankContent: PropTypes.string
};

class FullPreviewStep extends Component {
  renderTabs(name, value) {
    const { __ } = this.context;

    return (
      <Tabs
        selected={this.props.preview === value}
        onClick={() => this.onChange(value)}
      >
        {__(name)}
      </Tabs>
    );
  }

  carouseItems(name, value) {
    return (
      <CarouselInner selected={this.props.carousel === value}>
        <li>
          <span onClick={() => this.onChangePreview(value)} />
        </li>
        <span>{name}</span>
      </CarouselInner>
    );
  }

  onChange(value) {
    if (value === 'desktop') {
      this.props.onChange('preview', 'desktop');
    } else if (value === 'tablet') {
      this.props.onChange('preview', 'tablet');
    } else {
      this.props.onChange('preview', 'mobile');
    }
  }

  onChangePreview(value) {
    if (value === 'callout') {
      return this.props.onChange('carousel', 'callout');
    }

    if (value === 'form') {
      return this.props.onChange('carousel', 'form');
    }

    return this.props.onChange('carousel', 'success');
  }

  renderPreview() {
    const {
      calloutTitle,
      bodyValue,
      btnText,
      color,
      theme,
      image,
      type,
      fields,
      preview,
      carousel,
      onChange,
      thankContent
    } = this.props;

    if (type === 'shoutbox') {
      return (
        <ShoutboxPreview
          calloutTitle={calloutTitle}
          bodyValue={bodyValue}
          btnText={btnText}
          color={color}
          theme={theme}
          image={image}
          fields={fields}
          preview={preview}
          carousel={carousel}
          onChange={onChange}
          thankContent={thankContent}
        />
      );
    } else if (type === 'popup') {
      return (
        <PopupPreview
          calloutTitle={calloutTitle}
          bodyValue={bodyValue}
          btnText={btnText}
          color={color}
          theme={theme}
          image={image}
          fields={fields}
          preview={preview}
          carousel={carousel}
          onChange={onChange}
          thankContent={thankContent}
        />
      );
    }
    return (
      <EmbeddedPreview
        calloutTitle={calloutTitle}
        bodyValue={bodyValue}
        btnText={btnText}
        color={color}
        theme={theme}
        image={image}
        fields={fields}
        preview={preview}
        carousel={carousel}
        onChange={onChange}
        thankContent={thankContent}
      />
    );
  }

  renderResolution() {
    return (
      <ResolutionTabs>
        {this.renderTabs('Desktop', 'desktop')}
        {this.renderTabs('Tablet', 'tablet')}
        {this.renderTabs('Mobile', 'mobile')}
      </ResolutionTabs>
    );
  }

  renderResolutionPreview() {
    const { preview } = this.props;

    if (preview === 'desktop') {
      return <DesktopPreview>{this.renderPreview()}</DesktopPreview>;
    } else if (preview === 'tablet') {
      return <TabletPreview>{this.renderPreview()}</TabletPreview>;
    }
    return <MobilePreview>{this.renderPreview()}</MobilePreview>;
  }

  render() {
    return (
      <FlexItem>
        <Preview>
          {this.renderResolution()}
          {this.renderResolutionPreview()}
          <CarouselSteps>
            <ol>
              {this.carouseItems('Callout', 'callout')}
              {this.carouseItems('Form', 'form')}
              {this.carouseItems('Success', 'success')}
            </ol>
          </CarouselSteps>
        </Preview>
      </FlexItem>
    );
  }
}

FullPreviewStep.propTypes = propTypes;
FullPreviewStep.contextTypes = {
  __: PropTypes.func
};

export default FullPreviewStep;
