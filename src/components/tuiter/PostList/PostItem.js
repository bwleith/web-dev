import React from 'react';

const PostItem = (
    {
        post = {
            userImage: 'https://www.politico.eu/cdn-cgi/image/width=1320,height=971,fit=crop,quality=80,format=auto,onerror=redirect/wp-content/uploads/2022/02/27/GettyImages-1234651136.jpg',
            userName: 'Elon Musk',
            handle: 'elonmusk',
            time: '23h',
            text: 'Amazing show about @inspiration4x mission',
            image: 'https://resizing.flixster.com/GtcUsyaFO0ongMOui_sKTWYFBpk=/300x300/v2/https://flxt.tmsimg.com/assets/p20454835_b_v13_aa.jpg',
            comments: '4.2K',
            retweets: '3.5K',
            likes: '37.5K'
        }
    }
) => {
    return (
        <div>
            <a href="/" className="list-group-item list-group-item-action" aria-current="true">
                <div className="row">
                    
                    <div className="col-1">
                        <img
                            src={post.userImage}
                            className="img-fluid img-responsive rounded-circle"
                            alt=""
                        />
                    </div>
                    
                    <div className="col-11">
                    
                        <span className="wd-username">
                            {post.userName}
                        </span>
                         - 
                        <span className="wd-time">
                           @{post.handle}
                        </span>
                        
                        <div>
                            {post.text}
                        </div>
                        
                        <br/>
                        
                        <div>
                            <img src={post.image}
                                 className="img-fluid"
                                 alt=""
                            />
                        </div>
                        
                        <br/>
                        <div className="row">
                        
                            <div className="col-3">
                                <i className="fa fa-comment"> {post.comments}</i>
                            </div>
                            
                            <div className="col-3">
                                <i className="fa fa-retweet"> {post.retweets}</i>
                            </div>
                            
                            <div className="col-3">
                                <i className="fa fa-heart"> {post.likes}</i>
                            </div>
                            
                            <div className="col-3">
                                <i className="fa fa-share"></i>
                            </div>
                            
                        </div>
                        

                    
                    </div>
                    
                </div>
            </a>
        </div>
        


    );
}

export default PostItem;
