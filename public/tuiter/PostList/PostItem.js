const PostItem = (post) => {
    return (`

            <a href="#" class="list-group-item list-group-item-action" aria-current="true">
                <div class="row">
                    
                    <div class="col-1">
                        <img src="${post.userImage}"
                        class="img-fluid img-responsive rounded-circle">
                    </div>
                    
                    <div class="col-11">
                    
                        <span class="wd-username">
                            ${post.userName}
                        </span>
                         - 
                        <span class="wd-time">
                           @${post.handle}    
                        </span>
                        
                        <div>
                            ${post.text}
                        </div>
                        
                        </br>
                        
                        <div>
                            <img src="${post.image}"
                             class="img-fluid">
                        </div>
                        
                        </br>
                        <div class="row">
                        
                            <div class="col-3">
                                <i class="fa fa-comment"> ${post.comments}</i>
                            </div>
                            
                            <div class="col-3">
                                <i class="fa fa-retweet"> ${post.retweets}</i>
                            </div>
                            
                            <div class="col-3">
                                <i class="fa fa-heart"> ${post.likes}</i>
                            </div>
                            
                            <div class="col-3">
                                <i class="fa fa-share"></i>
                            </div>
                            
                        </div>
                        

                    
                    </div>
                    
                </div>
            </a>
        


    `);
}

export default PostItem;
