import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import JokeApp from './JokeApp.jsx'
import StateApp from './StateApp.jsx'
import ComplexStateApp from './components/ComplexStateApp.jsx'
import Forms from './Forms.jsx'
import ConditionalRend from './ConditionalRend.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <JokeApp /> */}
    {/* <StateApp /> */}
    {/* {<ComplexStateApp />} */}
    {/* {<Forms />} */}
    {<ConditionalRend />}
  </StrictMode>,
)
