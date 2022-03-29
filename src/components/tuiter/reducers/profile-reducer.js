import profile from "../data/profile.json";

const profileReducer = (state = profile, action) => {
    switch (action.type) {

        case 'edit-profile':
            console.log(action);
            const newProfile = action.profile
            return newProfile;

        default:
            return profile;

    }
}

export default profileReducer;