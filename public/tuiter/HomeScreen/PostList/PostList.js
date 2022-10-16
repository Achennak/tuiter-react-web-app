const PostList = (tweet) => {

    return (`<div class="wd-parent-flex-container2">
        <div class="wd-profile-image">
            <!-- profile image-->
            <img class="wd-rounded-corners-all-around-profile-image "
                 src="${tweet.profileImg}" width="48px" height="48px"/>
        </div>
        <div class="wd-profile-info">
            <!--text beside image-->
            <div class="wd-profile-outline">
                <div class="wd-profile-name">
                    <h4 class="wd-text-beside-profile-p1">${tweet.profileName}<i class="fas fa-check-circle" aria-hidden="true"></i></h4>
                    <h4 class="wd-text-beside-profile-p2">${tweet.handleName}</h4>
                    <h4 class="wd-text-beside-profile-p2">&nbsp;<span
                        class="wd-dot">&#183;</span>&nbsp;${tweet.date}</h4>

                </div>
                <div class="wd-icon-1">...</div>
            </div>

            <div class="wd-profile-details">
                <div class="wd-bio">
                    <p class="wd-text-bio"> ${tweet.content}</p>
                    ${tweet.postExternalLink ? `<span class="wd-text-bio text-primary"><a>  ${tweet.postExternalLink}</a></span>` : ``}
                   
                   
                    
                </div>
            </div>
            <div class="wd-bookmark-info" id="image-info">
                <div>
                    <!--image-->
                    <img class="wd-rounded-top-corners-images" src=${tweet.postImg} width="100%"
                    />
                </div>
                
                <div class="wd-text-below-image-borders">
                    <!--horizontal text below image-->
                    ${tweet.postImgContentTitle
                      ? `<p class="wd-title">  ${tweet.postImgContentTitle}</p>` : ``}
                    
                    ${tweet.postImgContent
                      ? `<p class="wd-text-below-image">  ${tweet.postImgContent}</p>` : ``}
                    
                   ${tweet.postLink ? `<p class ="wd-link-1"><i class="fa fa-solid fa-link"></i>${tweet.postLink}</p>` : ``}
            
                    
                </div>
            </div>
            <div class="wd-emojis">
                <div class="wd-reactions">
                    <p class="wd-icons">
                        <a href="#" class="wd-links">
                            <i class="fa-regular fa-comment"></i>
                        
                    </a>
                    </p>
                    <p class="wd-number">22 </p>
                    <p></p>

                </div>
                <div class="wd-reactions">
                    <p class="wd-icons">
                        <a href="#" class="wd-links">
                            <i class="fa-solid fa-retweet"></i>
                       
                    </a>
                    </p>
                    <p class="wd-number">9 </p> 
                   <p> </p>
                </div>
                <div class="wd-reactions">
                    <p class="wd-icons">
                        <a href="#" class="wd-links">
                            <i class="fa-solid fa-heart red"></i>
                        
                    </a>
                    </p>
                    <p class="wd-number">37 </p>
                    <p></p>
                </div>
                <div class="wd-reactions">
                    <p class="wd-icons">
                        <a href="#" class="wd-links">
                            <i class="fa fa-solid fa-arrow-up-from-bracket"></i>
                        </a>
                    </p>
                    <p></p>
                </div>
            </div>
        </div>
    </div>`);
};

export default PostList;