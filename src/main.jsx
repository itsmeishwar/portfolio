import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// this is the entry point of the React application. It imports the necessary modules and styles, and renders the main App component inside a StrictMode wrapper to help identify potential issues in the application. The createRoot function from React DOM is used to create a root for rendering the App component into the DOM element with the id 'root'.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
