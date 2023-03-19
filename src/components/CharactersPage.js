import logo from '../img/logo.png';
import Character from './Character';
import SearchForm from './SearchForm';


const CharactersPage = (props) => {
    return (
        <div className='charactersPage'>
            <div className='logo'><img src={logo} alt='Logo' /></div>
            <div>
                <SearchForm onFilterChange={props.onFilterChange} />
            </div>
            <div className='characters'>
                {props.characters.sort((a, b) => a.name.localeCompare(b.name)).map(character => {
                        return <Character key={character.id} character={character}></Character>
                    })}
            </div >
        </div>
    )
}







export default CharactersPage