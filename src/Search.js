import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useFetch from "./useFetch";

const Search = ({ searchKey, images, setImages, results, setResults, setIsLoading, setError }) => {
  const [searchPhotos, setSearchPhotos] = useState("");
  const searchURL = `https://api.unsplash.com/search/photos?per_page=50&query=${searchPhotos}&client_id=${searchKey}`;
  const axiosCall = useFetch;
  

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

  return (
      <div className="searchBar">
        <div className="top">
          <h1>Dellons Gallery</h1>
          <h2>No 1 world HD photos gallery website sourced from unsplash</h2>
          <div className="search-bar">
            <input
              type="text"
              value={searchPhotos}
              onChange={(e) => setSearchPhotos(e.target.value)}
              placeholder="Search photos"
              onKeyPress={handleChange}
            />
            <ToastContainer />
            <SearchIcon className="search-icon" />
          </div>
        </div>
      </div>
  );
};
 
export default Search;