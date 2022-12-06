import React from 'react'
import { Flex, Text, Header, Image } from '../primitives'
import theme from '../styles/theme'


const Headers = () => {
  return (
    <Header>
        <Flex.Row>
            <Flex.Column p={5} alignItems="flex-start">
                <Text.Heading_LG>Welcome to The Future of Cryptocurrency Gambling!</Text.Heading_LG>
                <Text.P_SM textColor={theme.colors.white_400}>Providing the most premier online casino experience through the most exciting and expansive selection of online casino games available, combined with a never seen before reward system!</Text.P_SM>
            </Flex.Column>
            
            {/* <Image width="100%" height="400px" src="../assets/images/homepage-header-thumbnail.png" />  */}
            <Image width="100%" height="412px" src="https://cdn.chips.gg/images/ml_chart01.png" /> 
        </Flex.Row>
    </Header>
  )
}

export default Headers
