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

// const type = props => {
//   switch (props.type) {
//     case 'steam':
//       return `
//         filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.5)) saturate(123%) contrast(110%);
//       `
//     default:
//       return `
//       `
//   }
// }

const Img = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  ${backgroundPosition}
  ${backgroundImage}
  ${backgroundSize}
  ${height}
  ${width}
`

const Image = ({ children, ...props }) => {
  return (
    <Img {...props} backgroundImage={`url(${props.src})`}>
      {children}
    </Img>
  )
}

Image.displayName = 'Image'

export default Image
