import './styles/global.css';
import Home from './pages/home';
import Casino from './pages/casino';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/casino" element={<Casino />} />
      </Routes>
  );
}


export default App;
