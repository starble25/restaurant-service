import './App.css';
import MainPage from './pages/main/MainPage';
import StoreDetail from './pages/storeDetail/StoreDetail';
import SubmainPage from './pages/submain/SubmainPage';
import { Route, Routes } from 'react-router-dom';



function App() {

  return (
    <Routes>
      {/* <MainPage /> */}
      <Route path='/main/store' element={<SubmainPage />}/>
      <Route path='/main/store/:id' element={<StoreDetail />} />
    </Routes>
  );
}

export default App;
