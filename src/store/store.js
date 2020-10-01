import { createStore, combineReducers } from "redux";
import filmesReducer from "./Filmes/Filmes.reducer";

const rootReducer = combineReducers({
    filmes: filmesReducer,
});

const store = createStore(rootReducer);

export default store;
