import styled from "styled-components";
import theme from "../styles/theme";
import { Text, Flex } from "./index";
import { space, flexbox, width } from "styled-system";

const bgColor = (props) => {
  switch (props.bgColor) {
    case "black800":
      return `
          color: ${theme.colors.white};
          background-color: ${theme.colors.black_600}};
        `;
    case "black400":
      return `
          color: ${theme.colors.white};
          background-color: ${theme.colors.black_400}};
          };
        `;
  }
};

const StyledDropdownMenu = styled.div`
  color: ${theme.colors.white};
  background-color: ${theme.colors.black_600}};
  border-radius: 8px;
  border: none;
  transition: 0.2s;
  padding: 8px;
  appearance:none;
  outline:0;
  font-size: 14px;
  line-height: 22px;
  list-style-type: none; 
  font-family: inter-medium;
  position: absolute;

    ${space}
    ${flexbox}
    ${bgColor}
    ${width}
}

`;

const DropdownMenu = ({LinkTo, children, bgColor, width, ...props}) => {
  return (
      <StyledDropdownMenu
        bgColor={bgColor}
        width={width}
        {...props}
      >
        {children}
      </StyledDropdownMenu>
  );
};


export default DropdownMenu;
