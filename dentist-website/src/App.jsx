import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Locations from "./pages/Locations";
import LocationDetail from "./pages/LocationDetail";
import './styles/dentalstyles.css'
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/servicios/:serviceId" element={<ServiceDetail />} />
        <Route path="/ubicaciones" element={<Locations />} />
        <Route path="/ubicaciones/:locationId" element={<LocationDetail />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
