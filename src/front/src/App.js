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

function App() {

  return (
    <Routes>
      <Route path='/main' element={<MainPage />} />
      <Route path='/board' element={<Board />} />
      <Route path='/main/store' element={<SubmainPage />} />
      <Route path='/main/store/:id' element={<StoreDetail />} />
      <Route path='/customer/mypage' element={<Customer />} />
      <Route path='/store/mypage' element={<Company/>} />
      <Route path='/reviewboard' element={<ReviewBoard />} />
    </Routes>
  );
}

export default App;