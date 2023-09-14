
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/Routes/ProtectedRoute';
import PublicRoute from './components/Routes/PublicRoute';

function App() {
  return (
   <>
   <ToastContainer/>
    <Routes>
      <Route path='/' element={<ProtectedRoute><HomePage/></ProtectedRoute>}/>
      <Route path='/login' element={<PublicRoute><LoginPage/></PublicRoute>}/>
      <Route path='/register' element={<PublicRoute><RegisterPage/></PublicRoute>}/>
    </Routes>
   </>
  );
}

export default App;
