
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