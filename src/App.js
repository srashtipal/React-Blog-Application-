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
import UserProvider from './Context/UserProvider';
import Categories from './Pages/Categories';
import UpdateBlog from './Pages/UpdateBlog';
import UpdateProfile from './Pages/UpdateProfile';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
      <ToastContainer position="bottom-center" />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/post/:postId" element={<PostPage />} />
      <Route path="/categories/:categoryId" element={<Categories />} />

      <Route path="/user" element={<Privateroute/>}>
      <Route path="dashboard" element={<Userdashboard/>}/>
      <Route path="profile-info/:userId" element={<ProfileInfo/>}/>
      <Route path="update-profile/:userId" element={<UpdateProfile/>}/>
      <Route path="update-blog/:blogId" element={<UpdateBlog/>}/>
      </Route>


    </Routes>
    </BrowserRouter>
    </UserProvider>
  );
}

export default App;
