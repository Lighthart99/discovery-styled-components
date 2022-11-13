import React from 'react'
import { Icon } from '../assets/icons'
import { Logo } from '../assets/logos'
import { Box, Button, Flex } from '../primitives'

const Topbar = () => {
  return (
    <Box p={4}>
        <Flex>
            <Flex>
                <Button sort="secondary" size="sm">
                    <Icon name="arrow_left"/>
                </Button>

                <Logo name="chips"/>
            </Flex>

            <Box>
                <Flex>            
                    <Button sort="secondary" size="sm">
                        <Icon name="games"/>
                        Sign Up
                    </Button>
                    <Button sort="primary" size="sm">
                        Sign In
                    </Button>
                </Flex>
            </Box>

            <Flex>
                <Button sort="secondary" size="sm">
                    <Icon name="arrow_right"/>
                </Button>
            </Flex>
        </Flex>
    </Box>
  )
}

export default Topbar
