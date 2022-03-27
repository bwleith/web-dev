import PostItem from "./PostItem.js";
import posts from "./posts.js";
import React from "react";


const Index = () => {
    return (
        <div>
            <ul className="list-group">
                {
                    posts.map(post => {
                        return(
                            <PostItem post={post}/>
                        );
                    })
                }
            </ul>
        </div>

    ); }

export default Index;