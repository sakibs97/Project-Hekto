import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ContextApi } from './components/ContextApi.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextApi>
    <App />
  </ContextApi>,
)
