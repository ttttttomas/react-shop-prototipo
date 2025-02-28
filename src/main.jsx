import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './index.css'
import FiltersProvider from './components/context/Filters.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
)
