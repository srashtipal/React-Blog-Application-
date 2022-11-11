import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import About from './Pages/About';
import Services from './Pages/Services';
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Userdashboard from './Pages/User-routes/Userdashboard';
import Privateroute from './Components/Privateroute';
import ProfileInfo from './Pages/User-routes/ProfileInfo'
import PostPage from './Pages/PostPage';


function App() {
  return (
    <BrowserRouter>
    <ToastContainer/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/post/:postId" element={<PostPage />} />

      <Route path="/user" element={<Privateroute/>}>
      <Route path="dashboard" element={<Userdashboard/>}/>
      <Route path="profile-info" element={<ProfileInfo />} />
      </Route>


    </Routes>
    </BrowserRouter>
  );
}

export default App;
