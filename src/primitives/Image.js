import React from "react";

import styled from "styled-components";
import {
  width,
  height,
  backgroundPosition,
  backgroundImage,
  backgroundSize,
  margin,
  borderRadius,
  overflow,
} from "styled-system";

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
const StyledImage = styled.img`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  ${backgroundPosition}
  ${backgroundImage}
  ${backgroundSize}
  ${height}
  ${width}
  ${margin}
  ${borderRadius}
  ${overflow}
`

const Image = ({ children, ...props }) => (
  <StyledImage {...props} backgroundImage={`url(${props.src})`}>
    {children}
  </StyledImage>
)

Image.displayName = 'Image'

Image.defaultProps = {
  borderRadius: 'normal',
}

export default Image
