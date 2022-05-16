import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Routing from './components/Routing'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Routing />
    </Router>
  )
}

export default App
