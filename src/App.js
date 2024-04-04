import './App.css';
import Home from './Components/MainContent/Home';
import DetailEnquiry from './Components/MainContent/DetailEnquiry';
import Assesments from './Components/MainContent/Assesments';
import Application from './Components/MainContent/Application';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Components/LogIn/Login';
import Register from './Components/Register/Register';
import Error from './Components/Error/Error';
import AddEnquiry from './Components/Enquiry/AddEnquiry';
import ViewEnquiry from './Components/Enquiry/ViewEnquiry';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddEnquiry" element={<AddEnquiry />} />
        <Route path="/ViewEnquiry" element={<ViewEnquiry />} />
        <Route path="/DetailEnquiry" element={<DetailEnquiry />} />
        <Route path="/Assesments" element={<Assesments />} />
        <Route path="/Application" element={<Application />} />
        <Route path="/LogIn" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<Error />} />

      </Routes>
    </Router>

  );
}

export default App;
