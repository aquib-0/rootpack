import './App.css'

import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import HomePage from './pages/home/HomePage';
import AuthPage from './pages/unprotected/AuthPage';
import DashboardPage from './pages/protected/DashboardPage';
import ProtectedRoutes from './routes/ProtectedRoutes';

function App() {

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center overflow-y-scroll relative scroll-smooth'>
      <Navbar />
      <div className='w-full h-full'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/auth/login' element={<AuthPage />} />
          <Route path='/auth/register' element={<AuthPage />} />
          <Route path='/dashboard' element={<ProtectedRoutes><DashboardPage /></ProtectedRoutes>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
