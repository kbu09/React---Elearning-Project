import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Website/Pages/Home";
import About from "./Website/Pages/About";
import Course from "./Website/Pages/Course";
import Team from "./Website/Pages/Team";
import Testimonial from "./Website/Pages/Testimonial";
import PNF from "./Website/Pages/PNF";
import Contact from "./Website/Pages/Contact";
import A_Dashboard from "./Admin/Pages/A_Dashboard";
import A_Student from "./Admin/Pages/A_Student";
import M_Student from "./Admin/Pages/M_Student";
import A_Employee from "./Admin/Pages/A_Employee";
import M_Employee from "./Admin/Pages/M_Employee";
import A_Course from "./Admin/Pages/A_Course";
import A_Contact from "./Admin/Pages/A_Contact";
import Admin_f from "./Admin/Pages/Admin_f";
import M_Course from "./Admin/Pages/M_Course";
import A_Login from "./Admin/Pages/A_Login";
import A_Signup from "./Admin/Pages/A_Signup";
import A_Blog from "./Admin/Pages/A_Blog";
import M_Blog from "./Admin/Pages/M_Blog";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./Website/Pages/Login";
import Signup from "./Website/Pages/Signup";
import Profile from "./Website/Pages/Profile";
import Blog from "./Website/Pages/Blog";
import A_Profile from "./Admin/Pages/A_Profile";
import Edit_Profile from "./Website/Pages/Edit_Profile";
import Aedit_Profile from "./Admin/Pages/Aedit_Profile";
import Manage_user from "./Admin/Pages/Manage_user";
import Manage_Employee from "./Admin/Pages/Manage_Employee";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer></ToastContainer>
        <Routes>
          <Route path="/" element={<><Home /></>}> </Route>
          <Route path="/about" element={<> <About /> </>}> </Route>
          <Route path="/course" element={<> <Course /> </>}> </Route>
          <Route path="/team" element={<> <Team /> </>}> </Route>
          <Route path="/testimonial" element={<> <Testimonial /> </>}> </Route>
          <Route path="/pnf" element={<> <PNF /> </>}> </Route>
          <Route path="/contact" element={<> <Contact /> </>}> </Route>
          <Route path="/login" element= {<> <Login/> </>}> </Route>
          <Route path="/signup" element= {<> <Signup/> </>}> </Route>
          <Route path="/profile" element = {<> <Profile/> </>}> </Route>
          <Route path="/edit_profile/:id" element= {<> <Edit_Profile/></>}> </Route>
          <Route path="/blog" element = {<> <Blog/> </>}> </Route>
        


          {/* Admin Routing Links  */}

          <Route path="/a_dashboard" element={<> <A_Dashboard /> </>}> </Route>
          <Route path="/a_student" element={<> <A_Student /> </>}> </Route>
          <Route path="/m_student" element={<> <M_Student /> </>}> </Route>
          <Route path="/a_employee" element={<> <A_Employee /> </>}> </Route>
          <Route path="/m_employee" element={<> <M_Employee /> </>}> </Route>
          <Route path="/a_course" element={<> <A_Course /> </>}> </Route>
          <Route path="/m_course" element={<> <M_Course /> </>}> </Route>
          <Route path="/a_contact" element={<> <A_Contact /> </>}> </Route>
          <Route path="/admin_f" element={<> <Admin_f /> </>}> </Route>
          <Route path="/a_login" element={<> <A_Login /> </>}> </Route>
          <Route path="/a_signup" element={<> <A_Signup /> </>}> </Route>
          <Route path="/a_blog" element={<> <A_Blog /> </>}> </Route>
          <Route path="/m_blog" element={<> <M_Blog /> </>}> </Route>
          <Route path="/a_profile" element ={<> <A_Profile/> </>}> </Route>

          <Route path="/aedit_profile/:id" element={<> <Aedit_Profile/></>}> </Route>
          <Route path="/manage_user" element = {<> <Manage_user/> </>}> </Route>
      
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
