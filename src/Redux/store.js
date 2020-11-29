import thunk from "redux-thunk";
import gifsReducer from './gifsDucks';
import favsReducer from './favsDucks';
import { createStore, applyMiddleware, combineReducers, compose } from "redux";

const rootReducer = combineReducers({
    gifs: gifsReducer,
    favs: favsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default  function generateStore () {
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
    return store;
}