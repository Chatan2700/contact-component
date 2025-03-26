import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import JokeApp from './JokeApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JokeApp />
  </StrictMode>,
)
