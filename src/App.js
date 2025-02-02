import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import Login from "./pages/Login.js";
import Register from "./pages/RegisterPage.js";
import Chatbot from "./components/ChatBot.js";
import Buttons from "./components/Buttons.js";
import './App.css';
import DummyChatbot from "./components/DummyChatbot.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/buttons" element={<Buttons />} />
        <Route path="/dummyChatbot" element={<DummyChatbot />} />
      </Routes>
    </Router>
  );
}

export default App;