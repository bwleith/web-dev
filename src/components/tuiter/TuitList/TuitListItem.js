import React from 'react';
import {useDispatch} from "react-redux";
import {deleteTuit} from "../../../actions/tuits-actions.js";
import TuitStats from "./TuitStats.js";

const TuitListItem = (
    {
        tuit
    }
) => {
    const dispatch = useDispatch();
    return (
        <div className="list-group-item list-group-item-action" aria-current="true">
                <div className="row">

                    <div className="col-1">
                        <img
                            src="https://cms.qz.com/wp-content/uploads/2017/03/twitter_egg_blue.png"
                            className="img-fluid img-responsive rounded-circle"
                            alt={"loading"}
                        />
                    </div>

                    <div className="col-11">

                        <span className="wd-username">
                            {tuit.postedBy.username}
                        </span>
                        -
                        <span className="wd-time">
                           @{tuit.postedBy.username}
                        </span>

                        <i className="fas fa-remove float-end"
                           onClick={() => deleteTuit(
                               dispatch, tuit)}/>

                        <div>
                            {tuit.tuit}
                        </div>

                        <br/>


                        <div>
                            <img src=""
                                 className="img-fluid"
                                 alt=""
                            />
                        </div>


                        <br/>
                        <div className="row">




                            <TuitStats tuit={tuit}/>


                        </div>



                    </div>

                </div>
            </div>




    );
}

export default TuitListItem;
