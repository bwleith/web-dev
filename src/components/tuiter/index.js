import {Outlet} from "react-router-dom";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer.js";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
const reducer = combineReducers({
    tuits: tuitsReducer,
    who: whoReducer
})
const store = createStore(reducer);


const Tuiter = () => {
    return (
        <Provider store={store}>
            <div className="row mt-2">
                <Outlet/>
            </div>
        </Provider>
    );
};
export default Tuiter;