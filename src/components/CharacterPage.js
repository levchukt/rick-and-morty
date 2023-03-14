import { NavLink } from "react-router-dom";


const CharacterPage = ({ profile }) => {
    console.log(profile);
    return (
        <div>
            <div className="backButton">
                <NavLink to='/'>GO BACK </NavLink>
                
            </div>
            <div>
                <div className="bigLogo">
                    <img src={profile.image} />
                </div>
                <h1>{profile.name}</h1>
                <h3>Informations</h3>
                <div className="info">
                    <div>
                        <p className="info__title">Gender</p>
                        <p className="info__text">{profile.gender}</p>
                    </div>
                    <div>
                        <p className="info__title">Status</p>
                        <p className="info__text">{profile.status}</p>
                    </div>
                    <div>
                        <p className="info__title">Specie</p>
                        <p className="info__text">{profile.species}</p>
                    </div>
                    <div>
                        <p className="info__title">Origin</p>
                        <p className="info__text">{profile.origin.name}</p>
                    </div>
                    <div>
                        <p className="info__title">Type</p>
                        <p className="info__text">{profile.type || 'Unknown'}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterPage