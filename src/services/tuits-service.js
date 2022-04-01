import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/tuits`;

export const createTuit = async (tuit) => {
    console.log()
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
}


export const findAllTuits = async () => {
    const response = await axios.get(TUITS_API);
    return response.data;
}

export const deleteTuit = async (tuit) => {
    console.log("inside deleteTuit service");
    console.log(tuit);
    console.log(TUITS_API);
    console.log(tuit._id);
    const response = await axios
        .delete(`${TUITS_API}/${tuit._id}`);
    return response.data;
}



export const updateTuit = async (tuit) => {
    const response = await axios
        .put(`${TUITS_API}/${tuit._id}`, tuit);
    return response.data;
}
