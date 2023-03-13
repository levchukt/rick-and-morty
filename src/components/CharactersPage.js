import logo from '../img/logo.png';
import SearchForm from './SearchForm';


const CharactersPage = (props) => {
    return (
        <div>
            <img src={logo} alt='Logo' />
            <div>
                <SearchForm onFilterChange={props.onFilterChange} />
            </div>
            {props.characters.sort((a, b) => a.name.localeCompare(b.name)).map(character => {
                    return <div key={character.id}>{character.name}</div>
                })}
        </div>
    )
}







export default CharactersPage