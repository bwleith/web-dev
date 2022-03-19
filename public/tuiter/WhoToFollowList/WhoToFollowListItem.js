const WhoToFollowListItem = (who) => {
    return(`
        <a href="#" class="list-group-item list-group-item-action wd-follow-bg" aria-current="true">

            <div class="row">
                <div class="col-3">
                    <img src="${who.avatarIcon}"
                         class="rounded-circle img-fluid"
                         style="height:auto"/>
                </div>
                <div class="col-5">
                    <span class="wd-username">${who.userName}</span>
                    <br>
                    ${who.handle}
                </div>
                <div class="col-4">
                    <button class="btn btn-primary wd-button-rounded wd-follow-button">
                        Follow
                    </button>
                </div>
            </div>

        </a>
    `);
}

export default WhoToFollowListItem;