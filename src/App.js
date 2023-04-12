import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';
import {
  BrowserRouter,
  Switch,
  Route,
  Routes,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Lottery from './Components/Lottery/Lottery';
import Results from './Components/Results/Results';
import About from './Components/About/About';
import Faq from './Components/Faq/Faq';
import Blog from './Components/Blog/Blog';
import Blog_details from './Components/Blog_details/Blog_details';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Collection from './Components/Collection/Collection';
import ScrollUpButton from "react-scroll-up-button";
import PrivateRoutes from './Components/Private';
import PublicRoute from './Components/Public';
import How_To_use from './Components/How to Use/How_To_use';

function App() {
  // localStorage.setItem("UserAuth",false)

  return (
    <div className="">

      <BrowserRouter>
      <Header/>
        <ToastContainer />
        <ScrollUpButton />
        <Routes>
          <Route path="/" element={<PublicRoute><Landing /></PublicRoute>} />
          <Route path="/Results" element={<PublicRoute><Results /></PublicRoute>} />
          <Route path="/About" element={<PublicRoute><About /></PublicRoute>} />
          <Route path="/Faq" element={<PublicRoute><Faq /></PublicRoute>} />
          <Route path="/How_To_use" element={<PublicRoute><How_To_use /></PublicRoute>} />

         
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
