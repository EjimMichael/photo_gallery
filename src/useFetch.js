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

// "563492ad6f9170000100000111f0f2e7839d43789b67f45f8133817c"