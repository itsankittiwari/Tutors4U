// import './App.css';
import HeroSection from './Pages/HeroSection';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StudentSection from './Pages/Student';
function App() {
  return (
    <>
      <BrowserRouter>
      <HeroSection/>
        <Routes>
          <Route path='/become_a_teacher' element={<StudentSection/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
