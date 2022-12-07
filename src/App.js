import './styles/global.css';
import Home from './pages/home';
import Registration from './pages/sign-up';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<Registration />} />
      </Routes>
  );
}


export default App;
