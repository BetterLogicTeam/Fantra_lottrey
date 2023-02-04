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

function App() {
  return (
    <div className="">
       <BrowserRouter>
        <Header/>
        <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Lottery" element={<Lottery />} />
        <Route path="/Results" element={<Results />} />
        <Route path="/About" element={<About />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Blog_details" element={<Blog_details />} />
        <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
