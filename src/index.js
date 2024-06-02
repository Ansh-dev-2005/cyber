import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./Pages/Home.jsx"
import ProgramCommittee from "./Pages/ProgramCommittee.jsx"
import CallForPaper from "./Pages/CallForPaper.jsx"
import About from "./Pages/About.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/organising-committee" element={<ProgramCommittee />}  />
        <Route path="/call-for-paper" element={<CallForPaper />}  />
        <Route path="/about" element={<About />}  />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
