import React from 'react';
import {useSelector} from "react-redux";
import NavigationSidebar from "../NavigationSidebar/";


const Profile = () => {
    const profile = useSelector(
        state => state.profile);
    return(
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="profile"/>
            </div>
            <div className="col-10 col-md-10 col-lg-10 col-xl-10">
                <div className = "row">
                    <h3 className="wd-username">{profile.firstName} {profile.lastName}</h3>

                    <h6 className = "wd-number-of-tuits">2,000 tweets</h6>
                </div>
                <div className = "row">
                    <img src={profile.bannerPicture}
                         alt=""
                    />

                </div>

                <div className = "row">
                    <div className = "col-2">
                        <img src={profile.profilePicture}
                             className="wd-profile-image-rounded"
                             height = "200"
                             width = "200"
                             alt =""

                        />
                    </div>
                    <div className = "col-8">

                    </div>
                    <div className = "col-2">
                        <div className="d-grid mt-2">
                            <a href = "/tuiter/editprofile"
                               className="btn btn-primary btn-block rounded-pill">
                                Edit Profile</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <h6 className="wd-userName">{profile.firstName} {profile.lastName}</h6>
                    <h6 className="wd-number-of-tuits">@{profile.handle}</h6>
                </div>

                <div className="row">
                    <p>
                        {profile.bio}
                    </p>
                </div>

                <div className = "row wd-number-of-tuits">
                    <span className = "col-4">
                        <i className = "fa-solid fa-map-marker" aria-hidden="true"></i> {profile.location}
                    </span>

                    <span className = "col-4">
                        <i className = "fa-solid fa-birthday-cake" aria-hidden="true"></i> Born {profile.dateOfBirth}
                    </span>

                    <span className = "col-4">
                        <i className = "fa-solid fa-calendar" aria-hidden="true"></i> Joined {profile.dateJoined}
                    </span>
                </div>

                <div className = "row">
                    <div className = "col-4">
                        <span className="wd-username">{profile.followersCount}</span> Followers
                    </div>
                    <div className = "col-4">
                        <span className="wd-username">{profile.followingCount}</span> Following
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Profile;