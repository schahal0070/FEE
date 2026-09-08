import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index3.css'
// import Store from './Store.jsx'
// import ShowList from './ShowList.jsx'
import {Header} from './Header.jsx';
import {Notes} from './Notes.jsx';
import {Footer} from './Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Store brand = {"Pepe"} />
    <ShowList brand ={"Pepe"} /> */}
    <Header></Header>
    <Notes />
    <Footer></Footer>
  </StrictMode>,
);
