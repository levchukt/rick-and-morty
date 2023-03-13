import React from "react";
import { connect } from "react-redux";
import { requestCharacters, sendFormValue, filterCharacters } from "../redux/charactersReducer";
import CharactersPage from "./CharactersPage";


class CharactersContainer extends React.Component {
    componentDidMount() {
        this.props.requestCharacters();
        
    }

    filterNames(value) {
        const regexp = new RegExp(value, 'gi');
        const filteredCharacters = this.props.characters.filter(character => regexp.test(character.name));
        this.props.filterCharacters(filteredCharacters)
    }

    render() {
        return (
            <div>
                <CharactersPage characters={this.props.filteredArray} sendFormValue={this.props.sendFormValue} filterNames={this.filterNames} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        characters: state.mainPage.characters,
        formValue: state.mainPage.formValue,
        filteredArray: state.mainPage.filteredArray
    }
}

export default connect(mapStateToProps, {requestCharacters, sendFormValue, filterCharacters})(CharactersContainer);