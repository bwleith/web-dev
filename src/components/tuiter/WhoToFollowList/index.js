import React from 'react';
import WhoToFollowListItem from "./WhoToFollowListItem.js";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector(state => state.who);
    return(
        <div>
            <ul className="list-group">
                {
                    who.map(who => {
                        return(
                            <WhoToFollowListItem who={who}/>
                        );
                    })
                }
            </ul>
        </div>
    );
};
export default WhoToFollowList;

