import { NavLink } from "react-router-dom"

const Character = ({ character }) => {
    return (
        <NavLink to={`/character/${character.id}`}>
            <div className="character">
                <img className="characterLogo" src={character.image} alt='Avatar' />
                <div className="characterTextBlock">
                    <h3 className="characterName">{character.name}</h3>
                    <p className="characterText">{character.species} </p>
                </div >
            </div>
        </NavLink>
    )
}

export default Character