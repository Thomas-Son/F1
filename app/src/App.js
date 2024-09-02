import {Routes, Route} from "react-router-dom"

import Header from "./components/header/index"
import Footer from "./components/footer/index"

import Home from "./components/pages/home/index"
import Driver from "./components/pages/driver/index"
import Team from "./components/pages/team/index"
import GPList from "./components/pages/GPList/index"
import Group from "./components/pages/group/index"

import Signin from "./components/pages/user/signin/index"
import Signup from "./components/pages/user/signup/index"
import Signout from "./components/pages/user/signout/index"

import './App.css';

function App() {
  return (
    <>

      <Header />

        <Routes >
         <Route path="/" element={<Home />} />
         <Route path="/pilotes" element={<Driver />} />
         <Route path="/equipes" element={<Team />} />
         <Route path="/GP-2024" element={<GPList />} />
         <Route path="/paris" element={<Group />} />

         <Route path="/utilisateur/connexion" element={<Signin />} />
         <Route path="/utilisateur/inscription" element={<Signup />} />
         <Route path="/utilisateur/deconnexion" element={<Signout />} />
        </Routes>

      <Footer />

    </>
  );
}

export default App;
