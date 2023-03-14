import CharactersContainer from './components/CharactersContainer';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CharacterPageContainer from './components/CharacterPageContainer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<CharactersContainer />} />
        <Route path='character/:characterId?' element={ <CharacterPageContainer />} />
      </Routes>
    </div>
  );
}

export default App;
