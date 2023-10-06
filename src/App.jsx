import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import Episode from "./pages/Episode";
import Location from "./pages/Location";
import Home from "./pages/Home"
import "./App.css";
import CardDetails from "./components/Cards/CardDetails";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />
        <Route path="/episode" element={<Episode />} />
        <Route path="/episode/:id" element={<CardDetails />} />
        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App