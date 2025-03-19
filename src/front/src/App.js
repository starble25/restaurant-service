import './App.css';
import Board from './pages/board/Board';
import MainPage from './pages/main/MainPage';
import StoreDetail from './pages/storeDetail/StoreDetail';
import SubmainPage from './pages/submain/SubmainPage';
import { Route, Routes } from 'react-router-dom';

import Customer from './pages/customer/Customer';
import Company from './pages/company/Company';
import StoreInfoMain from './components/storeInfo/main/StoreInfoMain';
import ReviewBoard from './pages/reviewboard/ReviewBoard';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import StoreRegisterPage from './pages/register/StoreRegisterPage';


function App() {

  return (
    <Routes>
      <Route path='/main' element={<MainPage />} />
      <Route path='/board' element={<Board />} />
      <Route path='/main/store' element={<SubmainPage />} />
      <Route path='/main/store/:id' element={<StoreDetail />} />
      <Route path='/customer/mypage' element={<Customer />} />
      <Route path='/store/mypage' element={<Company />} />
      <Route path='/reviewboard' element={<ReviewBoard />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/login/register" element={<RegisterPage />} />
      <Route path="/login/Storeregister" element={<StoreRegisterPage />} />
    </Routes>

  );
}

export default App;