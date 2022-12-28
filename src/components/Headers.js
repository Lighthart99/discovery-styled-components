import React, { useContext } from "react";
import { Flex, Text, Header, Image, Box, Button } from "../primitives/index";
import theme from "../styles/theme";
import AuthContext from "../stores/authContext";
import { Icon } from "../assets/icons";

const Headers = () => {
  const { user } = useContext(AuthContext);

  return (
    <Header>
      <Flex.Row>
        <Flex.Column p={5} alignItems="flex-start">
          {!user && (
            <Text.Heading_LG>
              Welcome to The Future of Cryptocurrency Gambling!
            </Text.Heading_LG>
          )}
          {user && (
            <Text.Heading_LG>
              Let's get started, {user.user_metadata.full_name}
            </Text.Heading_LG>
          )}
          <Text.P_SM textColor={theme.colors.white_400}>
            Providing the most premier online casino experience through the most
            exciting and expansive selection of online casino games available,
            combined with a never seen before reward system!
          </Text.P_SM>

          {user && (
            <Flex.Column alignItems="flex-start" mt="24px">
              <Flex alignItems="center">
                <Box color={theme.colors.confirmation_500}>
                  <Icon name="check" height="16px" width="16px" />
                </Box>

                <Text.P_SM_Medium ml={2}>1500+ Unique Games</Text.P_SM_Medium>
              </Flex>

              <Flex alignItems="center">
                <Box color={theme.colors.confirmation_500}>
                  <Icon name="check" height="16px" width="16px" />
                </Box>

                <Text.P_SM_Medium ml={2}>12+ Currencies</Text.P_SM_Medium>
              </Flex>

              <Flex alignItems="center">
                <Box color={theme.colors.confirmation_500}>
                  <Icon name="check" height="16px" width="16px" />
                </Box>

                <Text.P_SM_Medium ml={2}>
                  Exclusive Perks from VIP program
                </Text.P_SM_Medium>
              </Flex>

              <Button.IconRight
                sort="secondary"
                size="md"
                iconName="arrow_right"
                mt="24px"
              >
                Play Now
              </Button.IconRight>
            </Flex.Column>
          )}
        </Flex.Column>

        <Image
          width="420px"
          height="auto"
          src={require("../assets/images/homepage-header-thumbnail.png")}
          alt=""
        />
      </Flex.Row>
    </Header>
  );
};

// const Header_Casino = () => {
//   const { user } = useContext(AuthContext);

//   return (
//     <Header background={theme.colors.primary_20}>
//       <Flex.Row>
//         <Flex.Column p={5} alignItems="flex-start">
//           <Text.Heading_LG>
//           1,000,000 in Chips
// Second Anniversary Celebrations
//           </Text.Heading_LG>
//           <Text.P_SM textColor={theme.colors.white_400}>
//           Don’t miss out on your chance to win this September as we celebrate two years of Chips Casino!
//           </Text.P_SM>

//             <Flex.Column alignItems="flex-start" mt="24px">
//               <Flex alignItems="center">
//                 <Box color={theme.colors.confirmation_500}>
//                   <Icon name="check" height="16px" width="16px" />
//                 </Box>

//                 <Text.P_SM_Medium ml={2}>1500+ Unique Games</Text.P_SM_Medium>
//               </Flex>

//               <Flex alignItems="center">
//                 <Box color={theme.colors.confirmation_500}>
//                   <Icon name="check" height="16px" width="16px" />
//                 </Box>

//                 <Text.P_SM_Medium ml={2}>12+ Currencies</Text.P_SM_Medium>
//               </Flex>

//               <Flex alignItems="center">
//                 <Box color={theme.colors.confirmation_500}>
//                   <Icon name="check" height="16px" width="16px" />
//                 </Box>

//                 <Text.P_SM_Medium ml={2}>
//                   Exclusive Perks from VIP program
//                 </Text.P_SM_Medium>
//               </Flex>

//               <Button.IconRight
//                 sort="primary"
//                 size="md"
//                 iconName="arrow_right"
//                 mt="24px"
//               >
//                 Explore Now
//               </Button.IconRight>
//             </Flex.Column>
//         </Flex.Column>

//         <Image
//           width="420px"
//           height="auto"
//           src={require("../assets/images/homepage-header-thumbnail.png")}
//           alt=""
//         />
//       </Flex.Row>
//     </Header>
//   );
// };

export default Headers;
