import './App.css';
import MainPage from './pages/main/MainPage';
import SubmainPage from './pages/submain/SubmainPage';
import { Route, Routes } from 'react-router-dom';



function App() {

  return (
    <Routes>
      {/* <MainPage /> */}
      <Route path='/main/store' element={<SubmainPage/>} />
    </Routes>
  );
}

export default App;
