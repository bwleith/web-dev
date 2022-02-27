import PostItem from "./PostItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
    return (`
            <ul class="list-group">
                ${
        posts.map(posts => {
            return(PostItem(posts));
        }).join('')
    }
            </ul>
`); }

export default PostSummaryList;