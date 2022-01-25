import * as React from 'react'

import {
  RTFFormControl,
  RTFFormControlLabel,
  RTFFormLabel,
  RTFHeaderField,
  RTFRadio,
  RTFRadioGroup
} from '../styled'
import { Fragment, useEffect, useState } from 'react'

export const RTFFormRadioField = (
  {
    field,
    value,
    editable,
    inputvalue,
    onValueChanged,
    required,
    meta: { asyncValidating, touched, error }
  },
  ...rest
) => {
  const [localValue, setLocalvalue] = useState(inputvalue)

  const onValChange = (e) => {
    setLocalvalue(e.target.value)
    if (onValueChanged) {
      const retValue = field.options.filter((f) => {
        return f.value.toString() === e.target.value.toString()
      })
      if (retValue && retValue.length && retValue[0].returnvalue) {
        onValueChanged(field.datafield, retValue[0].returnvalue, field)
      } else {
        onValueChanged(field.datafield, e.target.value, field)
      }
    }
  }
  return (
    <div>
      {field.variant === 'open' ? (
        <div>
          <RTFHeaderField>{field.label}</RTFHeaderField>
          <RTFRadioGroup
            aria-label={field.datafield}
            name={field.datafield}
            value={localValue}
            onChange={(e) => {
              if (!editable) {
                onValChange(e)
              }
            }}
            multiline={field.multiline}
            style={{ paddingLeft: '2rem' }}
          >
            {field.options.map((d, di) => {
              return (
                <div key={di}>
                  <RTFFormControlLabel
                    key={di}
                    value={d.value}
                    control={<RTFRadio {...rest} />}
                    label={d.label}
                  />
                </div>
              )
            })}
          </RTFRadioGroup>
        </div>
      ) : (
        <RTFFormControl component='fieldset'>
          {field.label ? (
            <RTFFormLabel component='legend'>{field.label}</RTFFormLabel>
          ) : null}

          <RTFRadioGroup
            aria-label={field.datafield}
            name={field.datafield}
            value={localValue}
            onChange={(e) => {
              if (!editable) {
                onValChange(e)
              }
            }}
            multiline={field.multiline}
          >
            {field.options.map((d, di) => {
              return (
                <div key={di}>
                  <RTFFormControlLabel
                    key={di}
                    value={d.value}
                    control={<RTFRadio {...rest} />}
                    label={d.label}
                  />
                </div>
              )
            })}
          </RTFRadioGroup>
        </RTFFormControl>
      )}
    </div>
  )
}
