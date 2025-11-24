
import { Route,BrowserRouter as Router, Routes,useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import ESGCommandCenter from "./Components/Services.jsx";
import Header from './Components/Header'
import Footer from './Components/Footer'
import Faq from './Pages/F&Q'
import ContactUs from './Forms/ContactUs'
import SignupPage from './Forms/Signup'
import ServiceDetails from './Pages/ServiceDetails'
import Blog from './Pages/Blog'
import BlogDetails from './Pages/BlogDetails'
import Sample from './Components/Sample'
import About from './Pages/About'
import SliderAbout from './Slider/SliderAbout'
import Login from './Forms/Login'
import ForgetPass from './Forms/ForgetPass'
import Verify from './Forms/Verify'
import { AuthProvider } from './Context/AuthContext'

function AppLayout() {
  const location = useLocation();

  // Routes where header/footer should be hidden
  const hideLayoutRoutes = ['/contactus','/signup' ,'/login','/forgetpassword'];

  const hideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
<AuthProvider>
    {!hideLayout && <Header />}
      <Routes>
      <Route path='/' element={<Home/>}/>
      {/* <Route path='/services' element={<ESGCommandCenter/>}/> */}
      <Route path='/FaQ' element={<Faq/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path="/verify" element={<Verify />} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/forgetpassword' element={<ForgetPass/>}/>
      <Route path='/services/:serviceId' element={<ServiceDetails/>}/>
      <Route path='/blog/:blogId' element={<BlogDetails/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/services' element={<SliderAbout/>}/>

      {/* <Route path='/drop' element={<DropdownMenu/>} /> */}

      </Routes>
      { !hideLayout && <Footer />}
      </AuthProvider>
    
    </>
  )
}

export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}


