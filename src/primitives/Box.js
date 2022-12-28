// import { motion } from 'framer-motion'
import styled from 'styled-components'
import {
  borderRadius,
  space,
  width,
  height,
  color,
  order,
  position,
  top,
  right,
  bottom,
  left,
  size,
  textAlign,
  minWidth,
  maxWidth,
  maxHeight,
  minHeight,
  border,
  borderRight,
  borderBottom,
  borderTop,
  borderLeft,
  fontFamily,
  boxShadow,
  zIndex,
  justifyContent,
  alignItems,
  display,
  overflow,
  margin,
  flexbox,
  flexDirection,
  background,
} from 'styled-system'

const Box = styled.div.attrs(props => ({
  cursor: props.cursor || "",
}))`

  box-sizing: border-box;

  ${zIndex}
  ${boxShadow}
	${borderRadius}
  ${border}
  ${borderRight}
  ${borderLeft}
  ${borderTop}
  ${borderBottom}
	${color}
	${order}
	${position}
	${top}
	${right}
	${bottom}
	${left}
	${space}
	${textAlign}
	${size}
  ${width}
  ${height}
  ${minWidth}
  ${maxWidth}
  ${minHeight}
  ${maxHeight}
  ${fontFamily}
  ${zIndex}
  ${justifyContent}
  ${alignItems}
  ${display}
  ${overflow}
  ${margin}
  ${flexbox}
  ${flexDirection}
  ${background}
`

Box.displayName = 'Box'

export default Box
