import axios from 'axios';

const url = 'http://localhost:8000';

export const createAdmin = async (data) =>{
    try {
        console.log(data)
        return await axios.post(`${url}/createadmin`, data);
    } catch (error) {
        console.log("Error while calling createAdmin API " + error);
    }
}

export const getAdminDetail = async (data) =>{
    // console.log(data);
    try {
        return await axios.get(`${url}/${data.username}`);
    } catch (error) {
        console.log("Error while getting details " + error);
    }
}