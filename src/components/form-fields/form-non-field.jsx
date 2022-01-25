import * as React from 'react'
import { useState, useEffect, Fragement } from 'react'
import {
  RTFTextField,
  RTFFormRow,
  RTFNoContentAvailable,
  RTFDividerField,
  RTFImageContainer,
  RTFHeaderField,
  RTFLabelField
} from '../styled'
import { RTFVideoField } from './video-field'
import { RTRTFDRTFiewer } from './pdf-field'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faVideo } from '@fortawesome/free-solid-svg-icons'

export const RTFFormNonField = (props) => {
  const renderSwitch = () => {
    switch (props.field.type) {
      case 'image':
        return (
          <RTFImageContainer {...props.field.props}>
            {props.field.value && props.field.value.length ? (
              <img
                src={props.field.value}
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
            ) : (
              <RTFNoContentAvailable>
                <div>
                  <FontAwesomeIcon icon={faImage} />
                </div>
                <div>NO IMAGE SELECTED</div>
              </RTFNoContentAvailable>
            )}
          </RTFImageContainer>
        )
      case 'divider':
        return <RTFDividerField {...props} />
      case 'header':
        return (
          <RTFHeaderField
            {...props}
            style={JSON.parse(JSON.stringify(props.field.style || {}))}
          >
            {props.field.value}
          </RTFHeaderField>
        )
      case 'label':
        return (
          <RTFLabelField
            dangerouslySetInnerHTML={{ __html: props.field.value }}
            {...props}
          ></RTFLabelField>
        )
      case 'video':
        return (
          <RTFVideoField
            field={props.field}
            {...props}
            style={JSON.parse(JSON.stringify(props.field.style || {}))}
          ></RTFVideoField>
        )
      case 'pdf':
        return (
          <RTRTFDRTFiewer
            field={props.field}
            {...props}
            style={JSON.parse(JSON.stringify(props.field.style || {}))}
          ></RTRTFDRTFiewer>
        )
      default:
        return 'foo'
    }
  }

  return <React.Fragment>{renderSwitch()}</React.Fragment>
  //   <div>
  //     <label>{label}</label>
  //     <div>
  //       <input {...input} placeholder={label} type={type} />
  //       {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  //     </div>
  //   </div>
  // )
}
