import axios from "axios";
import { urlStreams } from "./uri";

function fetchVideos() {
    return axios.get(urlStreams);
}

function fetchStream(id) {
    return axios.get(urlStreams + id)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default{
    fetchVideos,
    fetchStream
}