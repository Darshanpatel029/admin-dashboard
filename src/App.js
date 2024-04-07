import './App.css';
import Home from './Components/MainContent/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Components/LogIn/Login';
import Register from './Components/Register/Register';
import Error from './Components/Error/Error';
import AddEnquiry from './Components/Enquiry/AddEnquiry';
import ViewEnquiry from './Components/Enquiry/ViewEnquiry';
import ViewDetailEnquiry from './Components/DetailEnquiry/ViewDetailEnquiry';
import Assesments from './Components/Assesments/ViewAssesment';
import ViewApplication from './Components/Applications/ViewApplication';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddEnquiry" element={<AddEnquiry />} />
        <Route path="/ViewEnquiry" element={<ViewEnquiry />} />
        <Route path="/ViewDetailEnquiry" element={<ViewDetailEnquiry />} />
        <Route path="/Assesments" element={<Assesments />} />
        <Route path="/ViewApplication" element={<ViewApplication />} />
        <Route path="/LogIn" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<Error />} />

      </Routes>
    </Router>

  );
}

export default App;
