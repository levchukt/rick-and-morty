import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import ThunkMiddleware from "redux-thunk";
import charactersReducer from "./charactersReducer";

const reducers = combineReducers({
    mainPage: charactersReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(ThunkMiddleware)
));


export default store;

