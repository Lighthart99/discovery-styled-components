import { Sidebar, Topbar } from '../components/index';
import { Flex } from '../primitives';
import '../styles/global.css';

export function Home () {
  return (
    <Flex>
     <Sidebar />
      <Flex flexGrow="1">
        <Topbar />
      </Flex>
    </Flex>
  );
}

export default Home;
