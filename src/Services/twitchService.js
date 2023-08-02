import axios from "axios";
import { API_BASE_URL } from "../Services/url";

function fetchVideos() {
    return axios.get(API_BASE_URL);
}

function fetchStream(id) {
    return axios.get(API_BASE_URL + id)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default{
    fetchVideos,
    fetchStream
}