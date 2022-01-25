import * as React from 'react'
import { useState, useEffect } from 'react'
import { RTFColorField, RTFMediumHeader, RTFInputFiedlSet } from '../styled'

export const RTFFormColorField = (
  {
    field,
    value,
    inputvalue,
    editable,
    onValueChanged,
    required,
    meta: { asyncValidating, touched, error }
  },
  ...rest
) => {
  const [selectedColor, setSelectedColor] = useState('unset')
  useEffect(() => {
    if (inputvalue) {
      if (field.asobject && typeof inputvalue === 'object') {
        setSelectedColor(inputvalue[field.internalDatafield] || 'unset')
      } else {
        setSelectedColor(inputvalue || 'unset')
      }
    }
  }, [touched, error])

  const onValueUpdated = (e) => {
    setSelectedColor(e.target.value)
    if (onValueChanged) {
      onValueChanged(
        field.datafield,
        field.asobject
          ? { [field.internalDatafield]: e.target.value }
          : e.target.value,
        field
      )
    }
  }
  return (
    <div style={{ width: '100%' }}>
      <RTFInputFiedlSet style={{ display: 'flex' }}>
        <legend>{field.label}</legend>
        <div>
          <RTFColorField
            id={`text-field-${field.datafield}`}
            label={`${field.label}`}
            value={selectedColor}
            onChange={(e) => {
              if (!editable) {
                onValueUpdated(e)
              }
            }}
            fullWidth
            size='small'
            required={field.required}
            error={touched && error}
            variant='outlined'
            style={{ width: '100%' }}
            multiline={field.multiline}
            type={'color'}
            placeholder={field.placeholder}
            {...field.props}
            {...rest}
          />
        </div>
        <RTFMediumHeader>{selectedColor}</RTFMediumHeader>
      </RTFInputFiedlSet>

      {touched && error && <span>{error}</span>}
    </div>
  )
  //   <div>
  //     <label>{label}</label>
  //     <div>
  //       <input {...input} placeholder={label} type={type} />
  //       {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  //     </div>
  //   </div>
  // )
}
