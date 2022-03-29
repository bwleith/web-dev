import React from 'react';
import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
        active = 'explore'
    }) => {
    return(
        <div>
                <div className="list-group">
                    <Link to="/" className={`list-group-item ${active === "twitter" ? "active" : "inactive"}`}>
                        <i className="fab fa-twitter"></i></Link>

                    <Link className={`list-group-item ${active === "home" ? "active" : "inactive"}`} to="/tuiter/home">
                        <i className="fa fa-landmark"></i> Home</Link>

                    <Link className={`list-group-item ${active === "explore" ? "active" : "inactive"}`} to="/tuiter/explore">
                        <i className="fa fa-chart-bar"></i> Explore</Link>

                    <Link className={`list-group-item ${active === "notifications" ? "active" : "inactive"}`} to="/">
                        <i className="fa fa-bell"></i> Notifications</Link>

                    <Link className={`list-group-item ${active === "messages" ? "active" : "inactive"}`} to="/">
                        <i className="fa fa-inbox"></i> Messages</Link>

                    <Link className={`list-group-item ${active === "bookmarks" ? "active" : "inactive"}`} to="/">
                        <i className="fa fa-bookmark"></i> Bookmarks</Link>

                    <Link className={`list-group-item ${active === "lists" ? "active" : "inactive"}`} to="/">
                        <i className="fa fa-list"></i> Lists</Link>

                    <Link className={`list-group-item ${active === "profile" ? "active" : "inactive"}`} to="/tuiter/profile">
                        <i className="fa fa-user"></i> Profile</Link>

                    <Link className={`list-group-item ${active === "more" ? "active" : "inactive"}`} to="/">
                        <i className="fa fa-circle"></i> More</Link>




                </div>
                <div className="d-grid mt-2">
                    <a href="tweet.html"
                       className="btn btn-primary btn-block rounded-pill">
                        Tweet</a>
                </div>
        </div>
    );
}
export default NavigationSidebar;

