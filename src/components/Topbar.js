import React from 'react'
import { Icon } from '../assets/icons'
import { Logo } from '../assets/logos'
import { Box, Button, Flex } from '../primitives'

const Topbar = () => {
  return (
        <Flex p={4} alignItems="flex-start">
            <Flex alignItems="center" flexGrow="1">
                <Box mr={4}>
                    <Button sort="secondary" size="sm-icon-only">
                        <Icon name="arrow_left"/>
                    </Button>
                </Box>

                <Logo name="chips"/>
            </Flex>

            <Flex alignItems="center" justifyContent="end" flexGrow="1">            
                <Button sort="secondary" size="md" mr={2}>
                    <Icon name="games"/>
                    Sign Up
                </Button>
                <Button sort="primary" size="md">
                     Sign In
                </Button>
                <Box ml={4}>
                    <Button sort="secondary" size="sm-icon-only">
                     <Icon name="arrow_right"/>
                    </Button>
                </Box>
            </Flex>
        </Flex>
  )
}

export default Topbar
