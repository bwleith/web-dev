import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import NavigationSidebar from "../NavigationSidebar/";
import {useDispatch} from "react-redux";

const EditProfile = () => {
    let [bio, setBio]
        = useState('')
    let editprofile = useSelector(state => state.profile);
    const dispatch = useDispatch();
    const profileClickHandler = () => {
        console.log(bio)
        dispatch({
            type: 'edit-profile',
            profile: {
                ...editprofile,
                bio: bio
            }
        });
    }
    return(
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="profile"/>
            </div>
            <div className="col-10 col-md-10 col-lg-10 col-xl-10">
                <div className = "row">
                    <h3 className="wd-username">{editprofile.firstName} {editprofile.lastName}</h3>

                    <h6 className = "wd-number-of-tuits">2,000 tweets</h6>
                </div>
                <div className = "row">
                    <img src={editprofile.bannerPicture}
                         alt=""
                    />

                </div>

                <div className = "row">
                    <div className = "col-2">
                        <img src={editprofile.profilePicture}
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
                            <a href = "/tuiter/profile"
                               className="btn btn-primary btn-block rounded-pill">
                                Back</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <h6 className="wd-userName">{editprofile.firstName} {editprofile.lastName}</h6>
                    <h6 className="wd-number-of-tuits">@{editprofile.handle}</h6>
                </div>

                <div className="row">
                    <textarea value = {bio}
                              onChange={(event) =>
                                  setBio(event.target.value)}>
                    </textarea>
                </div>

                <div className = "row wd-number-of-tuits">
                    <span className = "col-4">
                        <i className = "fa-solid fa-map-marker" aria-hidden="true"></i> {editprofile.location}
                    </span>

                    <span className = "col-4">
                        <i className = "fa-solid fa-birthday-cake" aria-hidden="true"></i> Born {editprofile.dateOfBirth}
                    </span>

                    <span className = "col-4">
                        <i className = "fa-solid fa-calendar" aria-hidden="true"></i> Joined {editprofile.dateJoined}
                    </span>
                </div>

                <div className = "row">
                    <div className = "col-4">
                        <span className="wd-username">{editprofile.followersCount}</span> Followers
                    </div>
                    <div className = "col-4">
                        <span className="wd-username">{editprofile.followingCount}</span> Following
                    </div>
                </div>

                <div className = "row">
                    <div className = "col-4">

                        <Link to="/tuiter/profile">
                            <button type="button"
                                    onClick={profileClickHandler}
                                    className="btn btn-primary">Save</button>
                        </Link>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default EditProfile;