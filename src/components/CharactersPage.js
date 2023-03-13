import logo from '../img/logo.png';
import SearchForm from './SearchForm';


const CharactersPage = (props) => {
    return (
        <div>
            <img src={logo} alt='Logo' />
            <div>
                <SearchForm sendFormValue={props.sendFormValue} filterNames={props.filterNames} />
            </div>
            {props.characters.sort((a, b) => a.name.localeCompare(b.name)).map(character => {
                    return <div>{character.name}</div>
                })}
        </div>
    )
}







export default CharactersPage