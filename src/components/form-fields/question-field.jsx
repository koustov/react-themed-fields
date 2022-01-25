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

export const RTFQuestionField = (
  {
    field,
    value,
    editable,
    onValueChanged,
    required,
    meta: { asyncValidating, touched, error }
  },
  ...rest
) => {
  const [localValue, setLocalvalue] = useState(value)

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
      <div>
        <RTFHeaderField>{field.label}</RTFHeaderField>
        <Fragment>
          {field.image ? (
            <img
              src={field.image}
              alt='question'
              height={field.imageHeight || '200px'}
            />
          ) : null}
        </Fragment>
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
                  label={d.name}
                />
              </div>
            )
          })}
        </RTFRadioGroup>
      </div>
    </div>
  )
}
