import React from 'react';
import { connect } from 'react-redux';
import { getCharacter } from '../redux/charactersReducer';
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import CharacterPage from './CharacterPage';
import { compose } from 'redux';


class ProfileContainer extends React.Component  {
    componentDidMount() {
        let userId = this.props.router.params.characterId;
        this.props.getCharacter(userId);
        console.log(userId);
    }

    render() {
        return (
            <CharacterPage profile={this.props.profile} />
        )
        
    }
} 

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

const mapStateToProps = (state) => ({
    profile: state.mainPage.profile,
})


export default compose(
    connect(mapStateToProps, { getCharacter }),
    withRouter,
)(ProfileContainer)

