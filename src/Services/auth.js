import axios from "axios";

function setAxiosToken() {
  const authToken = localStorage.getItem('accessToken');

  if (authToken) {
    axios.defaults.headers["Authorization"] = `Bearer ${authToken}`;
  } else {
    delete axios.defaults.headers["Authorization"];
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  setAxiosToken,
};
