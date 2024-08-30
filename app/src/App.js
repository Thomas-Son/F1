import {BrowserRouter, Routes, Route} from "react-router-dom"

import Header from "./components/header/index"
import Footer from "./components/footer/index"

import Home from "./components/pages/home/index"
import Driver from "./components/pages/driver/index"
import GPList from "./components/pages/GPList/index"

import './App.css';

function App() {
  return (
    <BrowserRouter>

      <Header />

        <Routes >
         <Route path="/" element={<Home />} />
         <Route path="/pilotes" element={<Driver />} />
         <Route path="/GP-2024" element={<GPList />} />
        </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
