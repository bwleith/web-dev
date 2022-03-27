import React from 'react';

const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png',
            userName: 'NASA',
            handle: 'NASA'
        }
    }
    )   => {
    return(
        <div>
            <a href="/" className="list-group-item list-group-item-action wd-follow-bg" aria-current="true">
    
                <div className="row">
                    <div className="col-3">
                        <img src={who.avatarIcon}
                             className="rounded-circle img-fluid"
                             width="48"
                             alt=""
                        />
                    </div>
                    <div className="col-5">
                        <span className="wd-username">{who.userName}</span>
                        <br/>
                        @{who.handle}
                    </div>
                    <div className="col-4">
                        <button className="btn btn-primary wd-button-rounded wd-follow-button">
                            Follow
                        </button>
                    </div>
                </div>
    
            </a>
        </div>
    );
}

export default WhoToFollowListItem;