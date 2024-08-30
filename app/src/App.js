import {BrowserRouter, Routes, Route} from "react-router-dom"

import Header from "./components/header/index"
import Footer from "./components/footer/index"

import Home from "./components/pages/home/index"
import Driver from "./components/pages/driver/index"
import Team from "./components/pages/team/index"
import GPList from "./components/pages/GPList/index"
import Group from "./components/pages/group/index"

import './App.css';

function App() {
  return (
    <BrowserRouter>

      <Header />

        <Routes >
         <Route path="/" element={<Home />} />
         <Route path="/pilotes" element={<Driver />} />
         <Route path="/equipes" element={<Team />} />
         <Route path="/GP-2024" element={<GPList />} />
         <Route path="/paris" element={<Group />} />
        </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
