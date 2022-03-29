import {useDispatch} from "react-redux";
import React from "react";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };
    return (
        <div>
            <span onClick={likeTuit}>
                {
                    tuit.liked &&
                    <i className="fas fa-heart me-1"
                       style={{color: 'red'}}></i>
                }
                {
                    !tuit.liked &&
                    <i className="far fa-heart me-1"></i>
                }
                {tuit.stats && tuit.stats.likes}
            </span>

            <span className="col-3">
                <i className="fa fa-comment"> </i> {tuit.stats.comments}
            </span>

            <span className="col-3">
                <i className="fa fa-retweet"> </i> {tuit.stats.retuits}
            </span>

            <span className="col-3">
                <i className="fa fa-share"></i>
            </span>


        </div>


);
}
export default TuitStats;