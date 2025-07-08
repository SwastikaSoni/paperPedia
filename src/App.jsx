import './App.css'
import Home from './assets/screens/Home';
import About from './assets/screens/About';
import Contact from './assets/screens/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div >
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route exact path="/about" element={<About></About>}></Route>
          <Route exact path="/help" element={<Contact></Contact>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
