import PostSummaryList from "./../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return (`<div class="row d-flex align-items-center">
                <div class="col-10">
                    <div class="position-relative">
                        <input class="ps-5 form-control rounded-pill" placeholder="Search Tuiter"/>
                        <div class="position-absolute wd-search-tuiter">
                            <i class="fa fa-search"></i>
                        </div>
                    </div>
                </div>
                <div class="col-2">
                    <i class="text-primary fas fa-cog fa-2x"></i>
                </div>
            </div>

            <ul class="nav nav-tabs mt-2 mb-2">
                <li class="nav-item wd-nav-item-width">
                    <a class="nav-link active" href="#">
                        For You
                    </a>
                </li>
                <li class="nav-item wd-nav-item-width">
                    <a class="nav-link" href="trending.html">
                        Trending
                    </a>
                </li>
                <li class="nav-item wd-nav-item-width">
                    <a class="nav-link" href="news.html,">
                        News
                    </a>
                </li>
                <li class="nav-item wd-nav-item-width">
                    <a class="nav-link" href="sports.html" tabindex="-1">
                        Sports
                    </a>
                </li>
                <li class="nav-item wd-nav-item-width d-none d-md-block d-lg-block d-xl-block d-xxl-block">
                    <a class="nav-link" href="../../labs/a4/challenge/explore.html" tabindex="-1">
                        Entertainment
                    </a>
                </li>
            </ul>
            <div>
                <div class="position-relative">
                    <img src="../../images/starship.jpeg" width="100%"/>
                    <h1 class="position-absolute bottom-0 left-0 text-white ms-2">
                        SpaceX's Starship</h1>
                </div>

           <!-- image with overlaid text -->
           ${PostSummaryList()}
           </div>
    `);
}
export default ExploreComponent;
