import axios from "axios";

const useFetch = (url) => {
  const res = axios.get(url, {
    headers: {
      Authorization: process.env.REACT_APP_ACCESS_KEY,
    },
  });

  return res;
};

export default useFetch;
