import { createRoot } from 'react-dom/client'
import './index.css'
import { HashRouter } from 'react-router-dom';

  // Use <HashRouter> instead of <BrowserRouter>
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>,
)
