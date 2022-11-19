import { Sidebar, Topbar, Headers } from '../components/index';
import { Flex } from '../primitives';
import '../styles/global.css';

export function Home () {
  return (
    <Flex flexGrow="1">
     <Sidebar />
      <Flex.Column flexGrow="1">
        <Topbar />
        {/* add container here rob */}
        <Headers />
      </Flex.Column>
    </Flex>
  );
}

export default Home;
