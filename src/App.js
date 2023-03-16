import CharactersContainer from './components/CharactersContainer';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CharacterPageContainer from './components/CharacterPageContainer';
import React from 'react';
import { connect } from 'react-redux';
import Loader from './components/common/Loader';
import { initializeApp } from './redux/charactersReducer';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
}

  render() {

    if (!this.props.initialized) {
      return <Loader />
    }
    return (
      <div className="App">
        
        <Routes>
          <Route path='/' element={<CharactersContainer />} />
          <Route path='character/:characterId?' element={<CharacterPageContainer />} />
        </Routes>
      </div>
    );
  }
}
  

const mapStateToProps = (state) => ({
  initialized: state.mainPage.initialized
})



export default connect(mapStateToProps, {initializeApp})(App);
