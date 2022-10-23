import post from "./post.js";
import PostSummaryItem from "./PostSummaryItem.js";


const PostSummaryList = () => {
    return(`
      <ul class="list-group">
         ${
        post.map(list1 => {
            return(PostSummaryItem(list1));
        }).join('')
    }
      </ul>
   `);
}
export default PostSummaryList;