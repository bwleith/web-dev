import React from 'react';
import {useDispatch} from "react-redux";
import TuitStats from "./TuitStats.js";

const TuitListItem = (
    {
        tuit
    }
) => {
    const dispatch = useDispatch();
    const deleteTuit = (tuit) => {
        console.log("deleting tuit...")
        dispatch({type: 'delete-tuit', tuit})
    };
    return (
        <div className="list-group-item list-group-item-action" aria-current="true">
                <div className="row">

                    <div className="col-1">
                        <img
                            src={tuit.avatarImage}
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
                           @{tuit.handle}
                        </span>

                        <i onClick={() =>
                            deleteTuit(tuit)}
                            className="fas fa-remove fa-2x fa-pull-right"/>

                        <div>
                            {tuit.tuit}
                        </div>

                        <br/>


                        <div>
                            <img src={tuit.avatarImage}
                                 className="img-fluid"
                                 alt=""
                            />
                        </div>


                        <br/>
                        <div className="row">





                            <TuitStats tuit = {tuit}/>

                        </div>



                    </div>

                </div>
            </div>




    );
}

export default TuitListItem;
