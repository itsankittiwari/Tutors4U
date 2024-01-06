// import './App.css';
import HeroSection from './Pages/HeroSection';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StudentSection from './Pages/Student';
import Login from './Component/Login';
import ContactUs from './Pages/ContactUs';
import Signup from './Component/Signup';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<HeroSection/>}/>
        </Routes>
        <Routes>
          <Route path='/become_a_teacher' element={<StudentSection/>}/>
          <Route path='/login_student' element={<Login/>}/>
          <Route path='/contact_us' element={<ContactUs/>}/>
          <Route path='/sign_up' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
