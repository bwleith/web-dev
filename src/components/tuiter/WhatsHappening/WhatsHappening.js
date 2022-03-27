import React, {useState} from "react";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening]
        = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
            tuit: whatsHappening
        });
    }
    return (
      <div className="row mt-2 form-group list-group">
          <textarea value={whatsHappening}
                    onChange={(event) =>
                        setWhatsHappening(event.target.value)}
          >
          </textarea>
                <button
                    className = "btn-btn-primary btn-block rounded-pill"
                    onClick={tuitClickHandler}>

                    Tuit
                </button>
      </div>
    );
}
export default WhatsHappening;