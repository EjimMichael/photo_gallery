import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useFetch from "./useFetch";

const Search = ({ accessKey,images, setImages, setIsLoading, setError }) => {
  const [searchPhotos, setSearchPhotos] = useState("");
  const searchURL = `https://api.unsplash.com/search/photos?per_page=35&query=${searchPhotos}&client_id=${accessKey}`;
  const axiosCall = useFetch;
  const [results, setResults] = useState([]);

  const alert = () => {
    toast.error("Enter an Image name", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
  };

  const handleChange = (e) => {
    if (e.key === "Enter") {
      if (searchPhotos.length === 0) {
        alert();
      } else {
        setIsLoading(true);
        axiosCall(searchURL)
          .then((res) => {
            setResults(res.data.results);
            setSearchPhotos("");
            setIsLoading(false);
            setImages(results);
          })
          .catch((err) => {
            setIsLoading(false);
            setImages(images) || setImages(results)
              ? setImages("")
              : setError(err);
          });
      }
    }
  };
  return {
    handleChange,
    ToastContainer,
    results,
    searchPhotos,
    setSearchPhotos,
  };
};
 
export default Search;