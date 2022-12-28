import { Link } from "react-router-dom";
import { Icon } from "../assets/icons";
import { Headers } from "../components/index";
import {
  Flex,
  InnerContainer,
  Text,
  Section,
  Image,
  Button,
  Header,
  Box,
  Badge,
  Divider,
} from "../primitives";
import "../styles/global.css";
import theme from "../styles/theme";
import Base from "./Base";
import text from "../json/games.json";

export function Casino() {
  return (
    <Base>
      <Header background={theme.colors.primary_10}>
        <Flex.Row>
          <Flex.Column p={5} alignItems="flex-start" width="496px">
            <Badge sort="blue_20" size="xs" mb={2}>
              NEW
            </Badge>
            <Text.Heading_LG mb={1}>
              1,000,000 in Chips <br /> Second Anniversary Celebrations
            </Text.Heading_LG>
            <Text.P_MD textColor={theme.colors.white_400}>
              Don’t miss out on your chance to win this September as we
              celebrate two years of Chips Casino!
            </Text.P_MD>

            <Button.IconRight
              sort="primary"
              size="md"
              iconName="arrow_right"
              mt="24px"
            >
              Explore Now
            </Button.IconRight>
          </Flex.Column>

          <Flex justifyContent="center" width="592px">
            <Image
              width="100%"
              height="auto"
              src={require("../assets/images/header/header-casino.png")}
              alt=""
            />
          </Flex>
        </Flex.Row>
      </Header>

      <Flex mt={3} justifyContent="center">
        <Button.IconOnly
          size="sm-icon-only"
          sort="secondary"
          iconName="arrow_left"
          height="14px"
          width="14px"
        />
        <Button.IconOnly
          size="sm-icon-only"
          sort="secondary"
          iconName="arrow_right"
          height="14px"
          width="14px"
        />
      </Flex>

      <Flex.Column mt="48px">
        <Flex>
          <Link to="/">
            <Flex.Column alignItems="center" mr="24px">
              <Icon name="games" height="24px" width="24px" />
              <Text.Heading_XXS mt={2}>Favorites</Text.Heading_XXS>
            </Flex.Column>
          </Link>

          <Link to="/">
            <Flex.Column alignItems="center" mr="24px">
              <Icon name="games" height="24px" width="24px" />
              <Text.Heading_XXS mt={2}>Chips Original</Text.Heading_XXS>
            </Flex.Column>
          </Link>

          <Link to="/">
            <Flex.Column alignItems="center" mr="24px">
              <Icon name="games" height="24px" width="24px" />
              <Text.Heading_XXS mt={2}>All Slots</Text.Heading_XXS>
            </Flex.Column>
          </Link>

          <Link to="/">
            <Flex.Column alignItems="center">
              <Icon name="games" height="24px" width="24px" />
              <Text.Heading_XXS mt={2}>Live Slots</Text.Heading_XXS>
            </Flex.Column>
          </Link>
        </Flex>

        <Divider size="md" direction="horizontal" color={theme.colors.black_400}/>
      </Flex.Column>

      <Box mt="56px">
        <Flex>
          <Flex flexGrow="1" alignItems="center">
            <Box color={theme.colors.white} mr={2}>
              <Icon name="vip" height="24px" width="24px"></Icon>
            </Box>
            <Text.Heading_MD color={theme.colors.white}>
              Most Played
            </Text.Heading_MD>
          </Flex>
          <Button.IconOnly
            size="sm-icon-only"
            sort="secondary"
            iconName="arrow_left"
            height="14px"
            width="14px"
            mr={2}
          />
          <Button.IconOnly
            size="sm-icon-only"
            sort="secondary"
            iconName="arrow_right"
            height="14px"
            width="14px"
          />
        </Flex>
        {/* Component */}
        <Box mt="24px">
          <Box width="228px">
            <Image
              width="100%"
              height="auto"
              src={require("../assets/images/casino-thumbnail/candy-dreams.png")}
              alt=""
              borderRadius="8px"
            />
            <Box mt="12px">
              <Text.Heading_XXS color={theme.colors.white}>
                Game Name
              </Text.Heading_XXS>
              <Text.P_XS color={theme.colors.white_700}>
                Provider Name
              </Text.P_XS>
            </Box>
          </Box>
        </Box>
      </Box>
    </Base>
  );
}

export default Casino;
