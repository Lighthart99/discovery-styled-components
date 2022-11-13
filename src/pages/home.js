import { Sidebar, Topbar } from '../components/index';
import { Flex } from '../primitives';
import '../styles/global.css';

export function Home () {
  return (
    <Flex>

     <Sidebar />

      <Flex>
        <Topbar />
      </Flex>
      
    </Flex>
  );
}

export default Home;
