import styled from "styled-components";
import theme from "../styles/theme";
import { Text, Flex, Box } from "./index";
import { space, flexbox } from "styled-system";
import { Icon } from "../assets/icons/index";
import { Link } from "react-router-dom";

const color = (props) => {
  switch (props.color) {
    case "black800":
      return `
          color: ${theme.colors.white};
          background-color: ${theme.colors.black_600}};

          &:hover {
            color: ${theme.colors.white};
            background-color: ${theme.colors.black_500};
          }

          &:focus {
            background-color: ${theme.colors.black_500};
            outline: 1px solid ${theme.colors.primary_500};
            box-shadow: 0 0 0 4px ${theme.colors.primary_40};
          }

          &:disabled {
            color: ${theme.colors.white_900};
            background-color: ${theme.colors.black_900};
          };
        `;
    case "black400":
      return `
          color: ${theme.colors.white};
          background-color: ${theme.colors.black_400}};

          &:hover {
            color: ${theme.colors.white};
            background-color: ${theme.colors.black_300};
          }

          &:focus {
            background-color: ${theme.colors.black_300};
          }

          &:disabled {
            color: ${theme.colors.white_900};
            background-color: ${theme.colors.black_600};
          };
        `;

    case "Red":
      return `
              color: ${theme.colors.red_500};
              background-color: ${theme.colors.red_10}};
    
              &:hover {
                background-color: ${theme.colors.red_20}};
              }
    
              &:focus {
                background-color: ${theme.colors.red_30};
              }
            `;
  }
};

const StyledListItem = styled.div`
  
  color: ${theme.colors.white_500};
  background-color: ${theme.colors.black_600}};
  border-radius: 8px;
  border: none;
  transition: 0.2s;
  padding: 9px 14px;
  appearance:none;
  outline:0;
  font-size: 14px;
  line-height: 22px;
  list-style-type: none; 
  font-family: inter-medium;
  display: flex;
  align-items: center;

  &:hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.black_400}};
  }

  &:focus {
    border: none;
    outline: 1px solid ${theme.colors.primary_500};
    box-shadow: 0 0 0 4px ${theme.colors.primary_40};
  }

    ${space}
    ${flexbox}
    ${color}
}

`;

const ListItem = ({
  LinkTo,
  children,
  color,
  IconLeft,
  IconLeftName,
  // IconLeftWidth,
  // IconLeftHeight,
  IconRight,
  IconRightName,
  // IconRightWidth,
  // IconRightHeight,
  ...props
}) => {
  return (
    <Link to={LinkTo}>
      <StyledListItem width="228px" color={color} {...props}>
        {IconLeft && (
          <Box mr={2}>
            <Icon name={IconLeftName} width="18px" height="18px" />
          </Box>
        )}

        {children}

        {IconRight && (
          <Box mr={2}>
            <Icon name={IconRightName} width="16px" height="16px" />
          </Box>
        )}
      </StyledListItem>
    </Link>
  );
};

export default ListItem;
