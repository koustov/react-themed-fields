import React, { Suspense } from 'react'
import { RTFNoContentAvailable } from '../styled'
import styled from 'styled-components'

const FlexDiv = styled.div`
  display: flex;
  width: 100%;
`

const VideoPlayer = React.lazy(() => import('react-player'))
export const RTFVideoField = ({ field }, ...rest) => {
  return (
    <div style={{ display: 'flex' }}>
      {VideoPlayer ? (
        <Suspense fallback={<div>Loading...</div>}>
          {field.value ? (
            <FlexDiv style={JSON.parse(JSON.stringify(field.style || {}))}>
              <VideoPlayer url={`${field.value}`} />
            </FlexDiv>
          ) : (
            <RTFNoContentAvailable>
              <div></div>
              <div>NO VIDEO SELECTED</div>
            </RTFNoContentAvailable>
          )}
        </Suspense>
      ) : (
        <RTFNoContentAvailable>
          <div></div>
          <div>
            Will not be able to render video. Please check documentation
          </div>
        </RTFNoContentAvailable>
      )}
    </div>
  )
}
