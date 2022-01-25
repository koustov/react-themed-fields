import * as React from 'react'

import {
  RTFFormControl,
  RTFFormControlLabel,
  RTFFormLabel,
  RTFHeaderField,
  RTFRadio,
  RTFRadioGroup,
  RTFFieldSet
} from '../styled'
import { Fragment, useEffect, useState } from 'react'

export const RTFFormCheckboxGroupField = (
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
    <RTFFieldSet bordered>
      <legend>{field.label}</legend>
      {field.list.map((c, ci) => {
        return (
          <RTFCheckbox>
            <input
              type='checkbox'
              checked={localValue[c.datafield]}
              id={`${c.datafield}`}
              error={touched && error}
              onChange={(e) => {
                if (onValueChanged) {
                  localValue[c.datafield] = e.target.checked
                  setVal(localValue)
                  onValueChanged(cield.datafield, e.target.checked, c)
                }
              }}
            />
            <label htmlFor={`${field.datafield}`}>{field.label}</label>
          </RTFCheckbox>
        )
      })}
    </RTFFieldSet>
  )
}
