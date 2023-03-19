import { NavLink } from "react-router-dom";


const CharacterPage = ({ profile }) => {
    return (
        <div className="profileContainer">
            <div className="backButton">
                <NavLink to='/'>GO BACK </NavLink>
                
            </div>
            <div className="profile">
                <div className="avatar">
                    <img src={profile.image} alt='avatar'/>
                </div>
                <h1 className="profileTitle">{profile.name}</h1>
                <h3 className="profileInfo">Informations</h3>
                <div className="info">
                    <div className="infoContainer">
                        <p className="info__title">Gender</p>
                        <p className="info__text">{profile.gender}</p>
                    </div>
                    <div className="infoContainer">
                        <p className="info__title">Status</p>
                        <p className="info__text">{profile.status}</p>
                    </div>
                    <div className="infoContainer">
                        <p className="info__title">Specie</p>
                        <p className="info__text">{profile.species}</p>
                    </div>
                    <div className="infoContainer">
                        <p className="info__title">Origin</p>
                        <p className="info__text">{profile.origin.name}</p>
                    </div>
                    <div className="infoContainer">
                        <p className="info__title">Type</p>
                        <p className="info__text">{profile.type || 'Unknown'}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default CharacterPage;