import {BrowserRouter, Routes, Route} from 'react-router-dom';
//style
import './App.css';
//components
import PlayersList from './components/PlayersList';
import PlayerDetails from './components/PlayerDetails';
import Navbar from './components/Navbar';

function App() {
  console.log("This is App")
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path= "/playerslist" element= { <PlayersList />}/>
        <Route path = "/playerdetails/:id" element={<PlayerDetails />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
