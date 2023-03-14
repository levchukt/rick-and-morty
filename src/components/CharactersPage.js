import logo from '../img/logo.png';
import Character from './Character';
import SearchForm from './SearchForm';


const CharactersPage = (props) => {
    return (
        <div>
            <img src={logo} alt='Logo' />
            <div>
                <SearchForm onFilterChange={props.onFilterChange} />
            </div>
            {props.characters.sort((a, b) => a.name.localeCompare(b.name)).map(character => {
                    return <Character key={character.id} character={character}></Character>
                })}
        </div>
    )
}







export default CharactersPage