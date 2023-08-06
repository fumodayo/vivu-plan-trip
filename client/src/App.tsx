import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import TipsModal from "./components/modals/TipsModal";
import Navbar from "./components/navbar/Navbar";
import Reservations from "./pages/Reservations";
import Booking from "./pages/Booking";
import Place from "./pages/Place";

function App() {
  return (
    <Router>
      <TipsModal />
      <Navbar />
      <Routes>
        <Route path="/" element={<Reservations />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/place" element={<Place />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
