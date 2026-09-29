import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SideQuest from './SideQuest.jsx'
import './styles.css'
import './portfolioExtras.css'

const isSideQuest = /^\/side-quest\/?$/.test(window.location.pathname)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {isSideQuest ? <SideQuest /> : <App />}
  </React.StrictMode>,
)
