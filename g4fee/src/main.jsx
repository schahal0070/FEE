import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Store from './Store.jsx'
import ShowList from './ShowList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Store brand = {"Pepe"} />
    <ShowList brand ={"Pepe"} />
  </StrictMode>,
)
