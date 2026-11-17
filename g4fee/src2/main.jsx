import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css';
// import { App_usememo } from "./components/App_usememo";
// import {StateLifting} from "./StateLifting";
import { App } from "./App";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App_usememo /> */}
    {/* <StateLifting /> */}
    <App/> 

  </StrictMode>,
); 