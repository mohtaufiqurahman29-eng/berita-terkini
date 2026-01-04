import MyNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Detail from "./pages/Home";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";


function app() {
  return (
    <Router> 
      <MyNavbar />
      <Routes>
        {/* Halaman utama */}
        <Route path="/" element={<Home />} />

        {/* detail berita */}
        <Route path="/detail/:id" element={<Detail />}/>
      </Routes>
      <Footer />
    </Router>
    );
}

export default app;