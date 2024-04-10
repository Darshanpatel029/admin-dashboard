import './App.css';
// import Home from './Components/MainContent/Home';
import { Routes, Route, useLocation } from "react-router-dom";
import Login from './Components/LogIn/Login';
import Register from './Components/Register/Register';
import Error from './Components/Error/Error';
import AddEnquiry from './Components/Enquiry/AddEnquiry';
import ViewEnquiry from './Components/Enquiry/ViewEnquiry';
import ViewDetailEnquiry from './Components/DetailEnquiry/ViewDetailEnquiry';
import Assesments from './Components/Assesments/ViewAssesment';
import ViewApplication from './Components/Applications/ViewApplication';
import NavBar from './Components/Navbar/NavBar';
import SideBar from './Components/Sidebar/SideBar';
import Footer from './Components/Footer/Footer';

function App() {
  const location = useLocation();
  const hideComponents = location.pathname === "/LogIn";

  return (
    <body>
      {!hideComponents && <NavBar />}
      {!hideComponents && <SideBar />}
      <Routes>
        <Route path="/" element={<ViewEnquiry />} />
        <Route path="/AddEnquiry" element={<AddEnquiry />} />
        <Route path="/ViewEnquiry" element={<ViewEnquiry />} />
        <Route path="/ViewDetailEnquiry" element={<ViewDetailEnquiry />} />
        <Route path="/ViewAssessments" element={<Assesments />} />
        <Route path="/ViewApplication" element={<ViewApplication />} />
        <Route path="/LogIn" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {!hideComponents && <Footer />}
    </body>


  );
}

export default App;
