import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./Pages/Home.jsx"
import ProgramCommittee from "./Pages/ProgramCommittee.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/organising-committee" element={<ProgramCommittee />}  />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
