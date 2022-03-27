import React from 'react';
import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(
        <div>
            <div className="row">
                <div className="col-11">
                    <input type="text" className="form-control wd-search-bar wd-search-icon wd-input-field" placeholder="Search Tuiter" id="search-bar"/>
                </div>

                <div className="col-1">
                    <a href="/">
                        <i className="fa fa-cog fa-2x"></i>
                    </a>
                </div>
            </div>
            
            <br/>
            
           <ul className="nav mb-2 nav-tabs">


                    <li className="nav-item">
                        <a className="nav-link active" href="/">For you</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Trending</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Sports</a>
                    </li>
                    <li className="nav-item d-none d-md-inline">
                        <a className="nav-link" href="/">Entertainment</a>
                    </li>



           </ul>
           <a href="/" className="list-group-item list-group-item-action wd-background-color " aria-current="true">
                

                    <div className="row">
                        <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/for_press_release.jpg"
                             className="img-responsive"
                             alt=""
                        />
    

                        <div className="carousel-caption">
                            NASA Picks SpaceX to Land Next Americans on Moon
                        </div>
                    </div>



            </a>
                    
                    
           <PostSummaryList/>
        </div>
    );
}
export default ExploreComponent;

