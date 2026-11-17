// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { App_usememo } from "./components/App_usememo";
// import "./index.css";

// createRoot(document.getElementById("root")).render(
//     <StrictMode>
//         <App_usememo />
//     </StrictMode>
// );

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css';
// import { App_usememo } from "./components/App_usememo";
import {StateLifting} from "./StateLifting";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App_usememo /> */}
    <StateLifting />
  </StrictMode>,
);