const PostSummaryItem = (post) => {

    return (`

            <a href="#" class="list-group-item list-group-item-action wd-background-color " aria-current="true">
                <div class="row">
    
                    <div class="col-10">
                        <div class="wd-trending-topic">
                            ${post.topic}
                        </div>
                        <span class="wd-username">
                            ${typeof post.userName !== 'undefined' && post.userName !== '' ? post.userName + ' -' : ''}
                        </span>
                        
                        <span class="wd-time">
                            ${post.time}
                        </span>
                        
                        <div class="wd-article-summary">
                            ${post.title}
                        </div>
            
                        <div class="wd-number-of-tuits">
                            ${typeof post.tweets !== 'undefined' ? post.tweets + ' Tuits' : ''}
                        </div>
                    </div>
    
                    <div class="col-2">
                        <img src="${post.image}"
                             class="img-fluid img-responsive" style="width:auto"/>
                    </div>
                </div>
            </a>
        


    `);
}

export default PostSummaryItem;