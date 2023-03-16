// import React from 'react';
// import { connect } from 'react-redux';
// import { getCharacter } from '../redux/charactersReducer';
// import {
//     useParams,
// } from "react-router-dom";
// import CharacterPage from './CharacterPage';
// import { compose } from 'redux';
// import Loader from './common/Loader';

// class CharacterPageContainer extends React.Component  {
//     componentDidMount() {
//         let userId = this.props.params.characterId;
//         this.props.getCharacter(userId);
//         console.log(this.props.profile);
//     }

//     componentDidUpdate() {
//         let userId = this.props.params.characterId;
//         this.props.getCharacter(userId);
//     }

//     render() {
        
//         return (
//             <>
//                 {/* {this.props.isLoading ? <Loader /> : <CharacterPage profile={this.props.profile} /> }   */}
//                 <CharacterPage profile={this.props.profile} />
//             </>
//         )
        
//     }
// }

// function withRouter(Component) {
//     function ComponentWithRouterProp(props) {
//         let params = useParams();
//         return (
//             <Component
//                 params={params}
//             />
//         );
//     }

//     return ComponentWithRouterProp;
// }

// const mapStateToProps = (state) => {
//     return {
//         profile: state.mainPage.profile,
//         isLoading: state.mainPage.isLoading
//     }
// }



// export default compose(
//   withRouter,
//   connect(mapStateToProps, { getCharacter })
// )(CharacterPageContainer);



import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getCharacter } from "../redux/charactersReducer";
import CharacterPage from "./CharacterPage"

const CharacterPageContainer = ({ character, getCharacter, isLoading, match }) => {
    const {characterId} = useParams();

  useEffect(() => {
    getCharacter(characterId);
  }, [getCharacter, characterId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!character) {
    return <div>Character not found.</div>;
  }

  return (
    <div>
        <CharacterPage profile={character} /> 
    </div>
  );
};

const mapStateToProps = (state) => ({
  character: state.mainPage.profile,
  isLoading: state.mainPage.isLoading,
});

export default connect(mapStateToProps, { getCharacter })(CharacterPageContainer);