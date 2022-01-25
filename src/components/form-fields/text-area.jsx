import * as React from 'react'
import { useState, useEffect } from 'react'
import { RTFFormTextField } from './text-field'

export const RTFFormTextAreaField = (props) => {
  const [newProps, setNewProps] = useState(props)
  useEffect(() => {
    let res = { ...props, multiline: true }
    res.props = res.props || {}
    setNewProps(res)
  }, [])
  return <RTFFormTextField {...newProps} />
}
