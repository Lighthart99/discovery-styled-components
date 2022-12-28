import { Headers } from "../components/index";
import {
  Flex,
  InnerContainer,
  Text,
  Section,
  Image,
  Button,
} from "../primitives";
import "../styles/global.css";
import theme from "../styles/theme";
import Base from "./Base";

export function Home() {
  return (
    <Base>
      <Headers />
      <InnerContainer>
        <Section>
          <Flex.Row>
            <Flex.Column width="520px" alignItems="flex-start">
              <Text.Heading_LG textColor={theme.colors.white}>
                VIP Rewards and Perks
              </Text.Heading_LG>
              <Text.P_SM textColor={theme.colors.white_400} mb={4}>
                Play your favorite games and level up to earn fantastic rewards!
                Experience the most exclusive and generous VIP program in the
                online casino industry.
              </Text.P_SM>

              <Flex.Column>
                <Flex mb={3} alignItems="flex-start">
                  <Image
                    width="32px"
                    src={require("../assets/images/cash-rewards.png")}
                    alt=""
                    mr={3}
                  />
                  <Flex.Column>
                    <Text.Heading_XS textColor={theme.colors.white}>
                      Cash Rewards
                    </Text.Heading_XS>
                    <Text.P_SM textColor={theme.colors.white_400}>
                      Chips VIP bonuses are given to you throughout your VIP
                      journey, rewarding you for your gameplay and continued
                      loyalty.
                    </Text.P_SM>
                  </Flex.Column>
                </Flex>

                <Flex mb={3} alignItems="flex-start">
                  <Image
                    width="32px"
                    src={require("../assets/images/rakeback.png")}
                    alt=""
                    mr={3}
                  />
                  <Flex.Column>
                    <Text.Heading_XS textColor={theme.colors.white}>
                      Rakeback
                    </Text.Heading_XS>
                    <Text.P_SM textColor={theme.colors.white_400}>
                      Becoming a Chips VIP entitles you to fantastic rank up
                      rewards, level up perks, and boosted rakeback on all your
                      bets from the very first rank.
                    </Text.P_SM>
                  </Flex.Column>
                </Flex>

                <Flex alignItems="flex-start">
                  <Image
                    width="32px"
                    src={require("../assets/images/exclusive-perks.png")}
                    alt=""
                    mr={3}
                  />
                  <Flex.Column>
                    <Text.Heading_XS textColor={theme.colors.white}>
                      Exclusive Perks
                    </Text.Heading_XS>
                    <Text.P_SM textColor={theme.colors.white_400}>
                      You can enjoy a host of perks including exclusive
                      promotions, a dedicated VIP host, and customizable VIP
                      benefits tailored to your rank.
                    </Text.P_SM>
                  </Flex.Column>
                </Flex>
              </Flex.Column>

              <Button.IconRight
                sort="secondary"
                size="md"
                iconName="arrow_right"
                mt="24px"
              >
                Explore VIP Features
              </Button.IconRight>
            </Flex.Column>
            <Flex flexGrow="1" justifyContent="center">
            <Image
              width="420px"
              height="auto"
              src={require("../assets/images/homepage/vip-rewards-perks.png")}
              alt=""
            />
            </Flex>
          </Flex.Row>
        </Section>

        <Section>
          <Flex.Row>
            <Image
              width="420px"
              height="auto"
              src={require("../assets/images/homepage/daily-races-huge-promotions.png")}
              alt=""
            />

            <Flex.Column>
              <Text.Heading_LG textColor={theme.colors.white}>
                Participate in daily races, huge promotions and more...
              </Text.Heading_LG>
              <Text.P_SM textColor={theme.colors.white_400} mb={4}>
                Experience a brand new challenge everyday! Play now for the
                chance to win cash prizes, special promotions, and more.
              </Text.P_SM>

              <Flex.Column>
                <Flex.Row>
                  <Image
                    width="32px"
                    src={require("../assets/images/exclusive-perks.png")}
                    alt=""
                    mr={3}
                  />
                  <Flex.Column>
                    <Text.Heading_XS textColor={theme.colors.white}>
                      Exclusive Perks
                    </Text.Heading_XS>
                    <Text.P_SM textColor={theme.colors.white_400}>
                      You can enjoy a host of perks including exclusive
                      promotions, a dedicated VIP host, and customizable VIP
                      benefits tailored to your rank.
                    </Text.P_SM>
                  </Flex.Column>
                </Flex.Row>
              </Flex.Column>
            </Flex.Column>
          </Flex.Row>
        </Section>
      </InnerContainer>
    </Base>
  );
}

export default Home;
