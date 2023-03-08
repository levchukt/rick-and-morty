import logo from '../img/logo.png'

const CharactersPage = (props) => {
    return (
        <div>
            <img src={logo} alt='Logo'/>
            {props.characters.map(character => {
                    return <div>{character.name}</div>
                })}
        </div>
    )
}

export default CharactersPage