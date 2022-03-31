import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTuit} from "../../../actions/tuits-actions.js";

const WhatsHappening = () => {
    let [newTuit, setNewTuit] =
        useState({tuit: 'New tuit'});
    const dispatch = useDispatch();

    return (
        <div className="row mt-2 form-group list-group">
          <textarea
                    onChange={(e) =>
                        setNewTuit({...newTuit,
                            tuit: e.target.value})}
          >
          </textarea>
            <button
                className = "btn-btn-primary btn-block rounded-pill"
                onClick={() =>
                    createTuit(dispatch, newTuit)}>

                Tuit
            </button>
        </div>
    );
}
export default WhatsHappening;