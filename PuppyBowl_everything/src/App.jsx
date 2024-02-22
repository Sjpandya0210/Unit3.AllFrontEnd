import {BrowserRouter, Routes, Route} from 'react-router-dom';
//style
import './App.css';
//components
import PlayersList from './components/PlayersList';


function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path= "/playerslist" element= { <PlayersList />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
