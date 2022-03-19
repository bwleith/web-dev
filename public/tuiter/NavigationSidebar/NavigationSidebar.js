const NavigationSidebar = (active) => {
    return(`
            <div class="list-group">
                <a class="list-group-item ${active === "twitter" ? "active" : "inactive"}" href="/">
                    <i class="fab fa-twitter"></i></a>
                    
                <a class="list-group-item ${active === "home" ? "active" : "inactive"}" href="../HomeScreen/index.html">
                    <i class="fa fa-landmark"></i> Home</a>
                
                <a class="list-group-item ${active === "explore" ? "active" : "inactive"}" href="../ExploreScreen/index.html">
                    <i class="fa fa-chart-bar"></i> Explore</a>
                    
                <a class="list-group-item ${active === "notifications" ? "active" : "inactive"}" href="/">
                    <i class="fa fa-bell"></i> Notifications</a>
                    
                <a class="list-group-item ${active === "messages" ? "active" : "inactive"}" href="/">
                    <i class="fa fa-inbox"></i> Messages</a>
                    
                <a class="list-group-item ${active === "bookmarks" ? "active" : "inactive"}" href="/">
                    <i class="fa fa-bookmark"></i> Bookmarks</a>
                    
                <a class="list-group-item ${active === "lists" ? "active" : "inactive"}" href="/">
                    <i class="fa fa-list"></i> Lists</a>
                
                <a class="list-group-item ${active === "profile" ? "active" : "inactive"}" href="../profile.html">
                    <i class="fa fa-user"></i> Profile</a>
                    
                <a class="list-group-item ${active === "more" ? "active" : "inactive"}" href="/">
                    <i class="fa fa-circle"></i> More</a>
                    



            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;

