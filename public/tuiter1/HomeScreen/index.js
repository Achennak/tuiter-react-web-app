import PostSummaryList from "./../PostSummaryList/PostSummaryList.js";
import NavigationSidebar from "./../NavigationSidebar/index.js";
import tweets from "./PostList/PostItem.js";
import PostList from "./PostList/PostList.js";

function homeComponent() {
    $('#wd-home').append(`
        <div class="row mt-2">
   <div class="col-xl-2 col-xxl-2 col-sm-2 col-md-2 col-lg-1">
    <NavigationSidebar active="home"/>
   </div>
   <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10">
    
    ${tweets.map(post => `${PostList(post)}`
    ).join('')}
     
   </div>
   <div class="d-none d-lg-block d-xl-block d-xxl-block col-4">
    ${PostSummaryList()}
   </div>
  </div>
   `);
}

$(homeComponent);