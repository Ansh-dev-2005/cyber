import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from "./Pages/Home.jsx"
import ProgramCommittee from "./Pages/ProgramCommittee.jsx"
import CallForPaper from "./Pages/CallForPaper.jsx"
import About from "./Pages/About.jsx"
import Register from "./Pages/Register.jsx";


// const App = () => {

//   const location = useLocation()
//   return(
//     <TransitionGroup component={null}>
//       <CSSTransition key={location.key} classNames="fade" timeout={300}>
//         <Routes location={location}>
//           <Route path="/" element={<Home />}  />
//           <Route path="/organising-committee" element={<ProgramCommittee />}  />
//           <Route path="/call-for-paper" element={<CallForPaper />}  />
//           <Route path="/about" element={<About />}  />
//         </Routes>
//       </CSSTransition>
//     </TransitionGroup>
//   )
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/organising-committee" element={<ProgramCommittee />}  />
        <Route path="/call-for-paper" element={<CallForPaper />}  />
        <Route path="/about" element={<About />}  />
        <Route path="/register" element={<Register />}  />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
