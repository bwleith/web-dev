import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="col-11">
                    <input type="text" class="form-control wd-search-bar wd-search-icon wd-input-field" placeholder="Search Tuiter" id="search-bar">
                </div>

                <div class="col-1">
                    <a href="#">
                        <i class="fa fa-cog fa-2x"></i>
                    </a>
                </div>
            </div>
            
            </br>
            
           <ul class="nav mb-2 nav-tabs">


                    <li class="nav-item">
                        <a class="nav-link active" href="#">For you</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sports</a>
                    </li>
                    <li class="nav-item d-none d-md-inline">
                        <a class="nav-link" href="#">Entertainment</a>
                    </li>



           </ul>
           <a href="#" class="list-group-item list-group-item-action wd-background-color " aria-current="true">
                

                    <div class="row">
                        <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/for_press_release.jpg"
                             class="img-responsive" style="width:100%">
    

                        <div class="carousel-caption">
                            NASA Picks SpaceX to Land Next Americans on Moon
                        </div>
                    </div>



            </a>
                    
                    
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;

