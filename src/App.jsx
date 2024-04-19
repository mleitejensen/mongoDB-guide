import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'


function App() {

  document.title = "Guide til MongoDB på ubuntu"

  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route 
              path="/" 
              element={<Home/>}
            />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
