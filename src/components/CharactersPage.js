import logo from '../img/logo.png';
import SearchForm from './SearchForm';


const CharactersPage = (props) => {
    return (
        <div>
            <img src={logo} alt='Logo' />
            <div>
                <SearchForm/>
            </div>
            {props.characters.map(character => {
                    return <div>{character.name}</div>
                })}
        </div>
    )
}





export default CharactersPage