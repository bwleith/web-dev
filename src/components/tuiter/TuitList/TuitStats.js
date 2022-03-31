import {updateTuit} from "../../../actions/tuits-actions.js";
import {useDispatch} from "react-redux";
import React from "react";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    return (
        <div>
            <span>
                Likes: {tuit.likes}
                <i onClick={() => updateTuit(dispatch, {
                    ...tuit,
                    likes: tuit.likes + 1
                })} className="far fa-thumbs-up ms-2"/>
            </span>

            &nbsp;

            <span>
                Dislikes: {tuit.dislikes}
                <i onClick={() => updateTuit(dispatch, {
                    ...tuit,
                    dislikes: tuit.dislikes + 1
                })} className="far fa-thumbs-down ms-2"/>
            </span>

            &nbsp;
            &nbsp;
            &nbsp;

            <span>
                <i className="fa fa-share"/>
            </span>


        </div>


);
}
export default TuitStats;