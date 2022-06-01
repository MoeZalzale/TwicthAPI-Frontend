import ClipsPage from './ClipsPage'
import {BrowserRouter, HashRouter, Routes,Route} from "react-router-dom";
import GamesPage from './GamesPage';
import Home from './Home';
import GamesClips from './GamesClips';

function App() {
  return (
   
  <BrowserRouter>
    <div className= 'app'>
  
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path="clips/" element={<ClipsPage/>}/>
        <Route exact path="games/" element={<GamesPage/>}/>
        <Route exact path="games/:id" element={<GamesClips/>}/>


    </Routes>
    
    </div>
    </BrowserRouter>
  
  
    
  );
}

export default App;
