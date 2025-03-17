import './App.css';
import MainPage from './pages/main/MainPage';
import StoreDetail from './pages/storeDetail/StoreDetail';
import SubmainPage from './pages/submain/SubmainPage';
import { Route, Routes } from 'react-router-dom';


import Customer from './pages/customer/Customer';
import Company from './pages/company/Company';

function App() {

  return (
    <Routes>
      {/* <MainPage /> */}
      <Route path='/main/store' element={<SubmainPage />} />
      <Route path='/main/store/:id' element={<StoreDetail />} />
      {/* <MainPage /> */}
      <Route path='/customer/mypage' element={<Customer />} />
      <Route path='/store/mypage' element={<Company/>} />
    </Routes>
  );
}

export default App;
