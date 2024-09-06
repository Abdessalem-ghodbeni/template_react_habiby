import React, { useEffect } from "react";

import { Container } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { base_url } from "./baseUrl.js";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import "../public/assets/css/style.css";
import "../public/assets/js/bootstrap.bundle.min.js";
import Home from "./Layouts/HomeLaouts/Home/Home.jsx";
import Signup from "./Layouts/HomeLaouts/Signup/Signup.jsx";
import ErrorPage from "./Layouts/HomeLaouts/ErrorPage/ErrorPage.jsx";
import Signin from "./Layouts/HomeLaouts/Signin/Signin.jsx";
import UserDashboard from "./Layouts/LayoutsUser/UserDashboard/UserDashboard.jsx";
import ListeDemande from "./Layouts/LayoutsUser/Pages/LiseDemandes/ListeDemande.jsx";
import AjoutDemande from "./Layouts/LayoutsUser/Pages/AjouterDemande/AjoutDemande.jsx";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/assets/js/functions.js";
    script.async = true;

    script.onload = () => console.log("Le script a été chargé avec succès.");
    script.onerror = () => console.error("Erreur de chargement du script.");

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/signup" element={<Signup />} />

      <Route path="/signin" element={<Signin />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/user" element={<UserDashboard />}>
        <Route path="liste/demandes" element={<ListeDemande />} />
        <Route path="ajout/demande" element={<AjoutDemande />} />
      </Route>
    </Routes>
  );
}

export default App;
