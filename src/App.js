import './styles/global.css';
import Home from './pages/home';
import Registration from './pages/sign-up';
import Casino from './pages/casino';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<Registration />} />
          <Route path="/casino" element={<Casino />} />
      </Routes>
  );
}


export default App;
