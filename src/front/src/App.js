import './App.css';
import MainPage from './pages/main/MainPage';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import StoreRegisterPage from './pages/register/StoreRegisterPage';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login/register" element={<RegisterPage />} />
          <Route path="/login/Storeregister" element={<StoreRegisterPage />} />
          {/* <Route path="/" element={<NewProducts />} /> */}
        </Routes>
    </>
  );
}

export default App;
