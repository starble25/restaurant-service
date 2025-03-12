import './App.css';
import MainPage from './pages/main/MainPage';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login/register" element={<RegisterPage />} />
          {/* <Route path="/" element={<NewProducts />} /> */}
        </Routes>
    </>
  );
}

export default App;
