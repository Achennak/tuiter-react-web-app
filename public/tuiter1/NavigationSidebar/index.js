const NavigationSidebar = (page) => {
    var home='';
    var explore = '';
    if(page == 'home'){
        home='active';
    }
    if(page == 'explore'){
        explore='active';
    }
    return(`
   <div class="list-group">
     <div class="list-group-item" >
       <i class="fab fa-twitter"></i></div>
       <a href="../HomeScreen/index.html"
                   class="list-group-item list-group-item-action ${home}">
                    <div class="d-flex">
                        <div><i class="fas fa-home"></i></div>
                        <div class="d-none d-xl-block d-xxl-block ms-1">
                            Home
                        </div>
                    </div>
                </a>
                
                <a href="../explore/index.html"
                   class="list-group-item list-group-item-action ${explore}">
                    <div class="d-flex align-items-center ">
                        <i class="fas fa-hashtag"></i>
                        <div class="d-none d-xl-block d-xxl-block ms-1">Explore</div>
                    </div>
                </a>
                <a href="../notifications.html"
                   class="list-group-item list-group-item-action">
                    <div class="d-flex align-items-center">
                        <i class="fas fa-bell"></i>
                        <div class="d-none d-xl-block d-xxl-block ms-1">Notifications</div>
                    </div>

                </a>
                
                <a href="../messages.html"
                   class="list-group-item list-group-item-action">
                    <div class="d-flex align-items-center ">
                        <i class="fas fa-envelope"></i>
                        <div class="d-none d-xl-block d-xxl-block ms-1">Messages</div>
                    </div>
                </a>
                <a href="../bookmarks/index.html"
                   class="list-group-item list-group-item-action ">
                    <div class="d-flex align-items-center">
                        <i class="fas fa-bookmark"></i>
                        <div class="d-none d-xl-block d-xxl-block ms-1">
                            Bookmarks
                        </div>
                    </div>
                </a>
                
                <a href="../lists.html"
                   class="list-group-item list-group-item-action ">
                    <div class="d-flex align-items-center">
                        <i class="fas fa-list"></i>
                        <div class="d-none  d-xl-block d-xxl-block ms-1">
                            Lists
                        </div>
                    </div>
                </a>

                <a href="../profile.html"
                   class="list-group-item list-group-item-action ">
                    <div class="d-flex align-items-center">
                        <i class="fas fa-user"></i>
                        <div class="d-none d-xl-block d-xxl-block ms-1">
                            Profile
                        </div>
                    </div>
                </a>
                <a href="more.html"
                   class="list-group-item list-group-item-action ">
                    <div class="d-flex align-items-center">
                        <!--<div class="fa-stack wd-width">-->
                       <!-- <i class="fas fa-circle fa-stack-1x text-black" ></i>-->
                        <i class="fas fa-ellipsis-h text-white" ></i>
                       <!-- </div>-->
                        <div class="d-none d-xl-block d-xxl-block ms-1">
                            More
                        </div>
                    </div>
                </a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tuit</a>
   </div>
 `);
}
export default NavigationSidebar;