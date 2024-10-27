import "./App.css";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import HeroSection from "./components/HeroSection";
import Cards from "./components/Cards";
import LogoClouds from "./components/LogoClouds";
import Footer from "./layouts/Footer";
import AndroidDevelopment from "./components/AndroidDevelopment";
import WebDevelopment from "./components/WebDevelopment";
import EmbeddedSystem from "./components/EmbeddedSystem";

function App() {
  return (
    <>
      {/* Ensure that all routes are wrapped in the Routes component */}
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/AndroidDevelopment" element={<AndroidDevelopment />} />
        <Route path="/WebDevelopment" element={<WebDevelopment />} />
        <Route path="/EmbeddedSystem" element={<EmbeddedSystem />} />
      </Routes>
      {/* These components should render regardless of the route */}
      <Cards />
      <LogoClouds />
      <Footer />
    </>
  );
}

export default App;
