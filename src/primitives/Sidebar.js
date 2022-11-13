import styled from 'styled-components'
import {motion} from 'framer-motion'
import theme from '../styles/theme'

const Sidebar = styled(motion.nav)`
    width: 224px;
    max-width: 224px;
    background-color: ${theme.colors.black_700};
    padding: 14px;
    height: 100vh;
  }
`

Sidebar.defaultProps = {
  // bg: "foregroundBacking",
  bg: 'backing',
  //p: 3,
  height: '100%',
  flexDirection: 'column',
}

export default Sidebar
