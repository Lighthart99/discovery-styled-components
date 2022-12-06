import styled from "styled-components";
import { color, textAlign, space, flexbox, fontSize } from "styled-system";
import theme from "../styles/theme";

const Header = styled.div`
  color: ${theme.colors.white};
  background-color: ${theme.colors.black_700};
  border-radius: 16px;
  ${color}
	${textAlign}
  ${space}
  ${flexbox}
  ${fontSize}
`

// Header.grey = ({ children, ...props }) => {
//   return (
//     <Text
//       fontFamily="poppins-bold"
//       fontSize="14px"
//       lineHeight="20px"
//       {...props}
//     >
//       {children}
//     </Text>
//   );
// };

export default Header


