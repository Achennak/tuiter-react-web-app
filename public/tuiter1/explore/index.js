import NavigationSidebar from "./../NavigationSidebar/index.js";
import whoToFollow from "./../WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";

function exploreComponent() {
    $('#wd-explore').append(`
      
       <div class="row mt-2">
   <div class="col-xl-2 col-xxl-2 col-sm-2 col-md-2 col-lg-1">
     ${NavigationSidebar('explore')}
   </div>
   <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10">
    ${ExploreComponent()}
   
   </div>
   <div class="d-none d-lg-block d-xl-block d-xxl-block col-4">
    ${whoToFollow()}
   </div>
  </div>
   `);
}

$(exploreComponent);