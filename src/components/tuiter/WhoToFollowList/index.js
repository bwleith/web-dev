import React from 'react';
import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const Index = () => {
    return (
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
); }

export default Index;

