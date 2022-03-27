import React from 'react';

const PostSummaryItem = (
    {
        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        }
    }) => {

    return (

        <div>
            <a href="/" className="list-group-item list-group-item-action wd-background-color " aria-current="true">
                <div className="row">
    
                    <div className="col-10">
                        <div className="wd-trending-topic">
                            {post.topic}
                        </div>
                        <span className="wd-username">
                            {typeof post.userName !== 'undefined' && post.userName !== '' ? post.userName + ' -' : ''}
                        </span>
                        
                        <span className="wd-time">
                            {post.time}
                        </span>
                        
                        <div className="wd-article-summary">
                            {post.title}
                        </div>
            
                        <div className="wd-number-of-tuits">
                            {typeof post.tweets !== 'undefined' ? post.tweets + ' Tuits' : ''}
                        </div>
                    </div>
    
                    <div className="col-2">
                        <img src={post.image}
                             className="img-fluid img-responsive"

                             alt=""
                        />
                    </div>
                </div>
            </a>
        </div>
        


    );
}

export default PostSummaryItem;