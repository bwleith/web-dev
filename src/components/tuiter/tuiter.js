import React from "react";
import ExploreScreen from './ExploreScreen';
import HomeScreen from './HomeScreen';
import {Link} from "react-router-dom";

const Tuiter = () => {
    return(
        <div>

            <HomeScreen/>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/">
                Labs
            </Link>
        </div>
    )
};

export default Tuiter;
