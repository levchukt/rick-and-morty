import React from "react";
import { connect } from "react-redux";
import { requestCharacters } from "../redux/charactersReducer";
import CharactersPage from "./CharactersPage";


class CharactersContainer extends React.Component {
    componentDidMount() {
        this.props.requestCharacters();
        
    }

    render() {
        return (
            <div>
                <CharactersPage characters={this.props.characters} />
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        characters: state.mainPage.characters
    }
}

export default connect(mapStateToProps, {requestCharacters})(CharactersContainer);