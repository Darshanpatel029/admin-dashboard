import './App.css';
import Home from './Components/MainContent/Home';
import Enquiry from './Components/MainContent/Enquiry';
import DetailEnquiry from './Components/MainContent/DetailEnquiry';
import Assesments from './Components/MainContent/Assesments';
import Application from './Components/MainContent/Application';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Components/LogIn/Login';
import Register from './Components/Register/Register';
import Profile from './Components/Profile/Profile';
import Error from './Components/Error/Error';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Enquiry" element={<Enquiry />} />
        <Route path="/DetailEnquiry" element={<DetailEnquiry />} />
        <Route path="/Assesments" element={<Assesments />} />
        <Route path="/Application" element={<Application />} />
        <Route path="/LogIn" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="*" element={<Error />} />

      </Routes>
    </Router>

  );
}

export default App;
