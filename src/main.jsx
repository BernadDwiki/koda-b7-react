import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css'
import MiniTask1 from './Minitask1.jsx'
import MiniTask2 from './Minitask2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MiniTask1 /> 
    <MiniTask2 />
  </StrictMode>,
)
