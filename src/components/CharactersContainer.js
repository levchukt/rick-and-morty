import React from "react";
import { connect } from "react-redux";
import { requestCharacters, sendFormValue } from "../redux/charactersReducer";
import CharactersPage from "./CharactersPage";


class CharactersContainer extends React.Component {
    componentDidMount() {
        const searchTerm = localStorage.getItem('searchTerm') || '';
        this.props.requestCharacters(searchTerm);
        
    }

    onFilterChange = (searchTerm) => {
        this.props.requestCharacters(searchTerm);
        localStorage.setItem('searchTerm', searchTerm);
    }

    render() {
        return (
            <div>
                <CharactersPage characters={this.props.characters} sendFormValue={this.props.sendFormValue} onFilterChange={this.onFilterChange} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        characters: state.mainPage.characters,
        formValue: state.mainPage.formValue,
        searchTerm: state.mainPage.searchTerm
    }
}

export default connect(mapStateToProps, {requestCharacters, sendFormValue})(CharactersContainer);