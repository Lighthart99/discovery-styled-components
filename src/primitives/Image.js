import React from 'react'

import styled from 'styled-components'
import {
  width,
  height,
  backgroundPosition,
  backgroundImage,
  backgroundSize,
} from 'styled-system'

import Box from './Box'

const type = props => {
  switch (props.type) {
    case 'steam':
      return `
        filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.5)) saturate(123%) contrast(110%);
      `
    default:
      return `
      `
  }
}

const mainImg = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  ${backgroundPosition}
  ${backgroundImage}
  ${backgroundSize}
  ${type}
  ${height}
  ${width}
`

const Image = ({ children, ...props }) => (
  <mainImg {...props} backgroundImage={backgroundImage}>
    {children}
  </mainImg>
)

Image.displayName = 'Image'

Image.defaultProps = {
  borderRadius: 'normal',
}

export default Image
