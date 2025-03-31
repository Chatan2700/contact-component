import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import JokeApp from './JokeApp.jsx'
import StateApp from './StateApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <JokeApp /> */}
    <StateApp />
  </StrictMode>,
)
