import { NavLink } from "react-router-dom"

const Character = ({ character }) => {
    return (
        <NavLink to={`/character/${character.id}`}>
            <div className="character">
                <img src={character.image} alt='Avatar' />
                <h3 className="caharacterName">{character.name}</h3>
                <p className="characterText">{character.species} </p>
            </div>
        </NavLink>
    )
}

export default Character