import React from 'react';
import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const Index = () => {
    return (
        <div>
            <ul className="list-group">
                {
                    posts.map(post => {
                        return(
                            <PostSummaryItem post={post}/>
                        );
                    })
                }
            </ul>
        </div>
            
); }

export default Index;






