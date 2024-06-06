import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route index element={<LandingPage />}></Route>
        <Route path='/menu' element={<Menu />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
