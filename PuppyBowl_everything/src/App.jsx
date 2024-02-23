import {BrowserRouter, Routes, Route} from 'react-router-dom';
//style
import './App.css';
//components
import PlayersList from './components/PlayersList';
import Navbar from './components/Navbar';

function App() {
  console.log("This is App")
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path= "/playerslist" element= { <PlayersList />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
