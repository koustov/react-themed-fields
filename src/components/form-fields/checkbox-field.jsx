import * as React from 'react'
import { useState, useEffect } from 'react'
import { RTFFormControlLabel, RTFCheckbox, RTFHeaderField } from '../styled'

export const RTFFormCheckboxField = (
  {
    field,
    value,
    editable,
    onValueChanged,
    inputvalue,
    required,
    meta: { asyncValidating, touched, error }
  },
  ...rest
) => {
  const [val, setVal] = useState()
  useEffect(() => {
    if (inputvalue !== undefined) {
      setVal(inputvalue === true)
    }
  }, [touched, error, inputvalue])
  return (
    <RTFCheckbox>
      <input
        id={`checkbox-${field.datafield}`}
        checked={val}
        id={`${field.datafield}`}
        error={touched && error}
        onChange={(e) => {
          setVal(e.target.checked)
          if (onValueChanged) {
            onValueChanged(field.datafield, e.target.checked)
          }
        }}
      />
      <label htmlFor={`${field.datafield}`}>{field.label}</label>
    </RTFCheckbox>
    //   <RTFHeaderField>{field.label}</RTFHeaderField>
    //   <RTFFormControlLabel
    //     control={
    //       <RTFCheckbox
    //         checked={inputvalue}
    //         onChange={(e) => {
    //           if (onValueChanged) {
    //             if (!editable) {
    //               onValueChanged(field.datafield, e.target.checked, field)
    //             }
    //           }
    //         }}
    //         name='checkedB'
    //         error={touched && error}
    //         variant='outlined'
    //         {...field.props}
    //         {...rest}
    //       />
    //     }
    //     label={`${field.label}`}
    //   ></RTFFormControlLabel>
    // </div>
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
