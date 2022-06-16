import './App.css';
import {useState, useEffect } from 'react';
import SearchIcon from "@mui/icons-material/Search";
import useFetch from './useFetch';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdDownloadForOffline } from 'react-icons/md';
import Error from './images/Error.PNG'; 

function App() {
  const axiosCall = useFetch;
  const accessKey = process.env.REACT_APP_ACCESS_KEY;
  const url = `https://api.unsplash.com/photos/?client_id=${accessKey}&count=30`;
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');

  const [searchPhotos, setSearchPhotos] = useState("");
  const [results, setResults] = useState([]);
  const searchURL = `https://api.unsplash.com/search/photos?page=1&query=${searchPhotos}&client_id=${accessKey}&count=30`;

  const alert = () => { 
    toast.error('Enter an Image name', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000
    });
  }

  useEffect(() => {
    axiosCall(url)
    .then(res => {
      setImages(res.data);
      console.log(res.data);
    }).catch(err => {
      setError(err);
    })
  }, [axiosCall, url]);

  const handleChange = (e) => {    
    if (e.key === "Enter") {
      if (searchPhotos.length === 0) {
        alert();
      } else {
         axiosCall(searchURL)
           .then((res) => {
             setResults(res.data.results);
             setImages(results);
             setSearchPhotos("");
           })
           .catch((err) => {
             setImages(images) || setImages(results)
               ? setImages("")
               : setError(err);
           });
      }      
    }
  };

  return (
    <div className="App">
      <div className="top">
        <h1>Dellons Photo Gallery</h1>
        <div className="search-bar">
          <input
            type="text"
            onChange={(e) => setSearchPhotos(e.target.value)}
            placeholder="Search photos"
            onKeyPress={handleChange}
          />
          <ToastContainer />
          <SearchIcon className="search-icon" />
        </div>
      </div>
      <div className="images">
        {results.map((result) => (
          <div className="md">
            <img src={result.urls.regular} key={result.id} alt="" />
            <a
              href={`${result?.links?.download_location}?client_id=${accessKey}?dl=`}
              download
              key={result.id}
              onClick={(e) => e.stopPropagation()}
            >
              <MdDownloadForOffline />
            </a>
          </div>
        ))}
      </div>

      <div className="images">
        {images.map((image) => (
          <img src={image.urls.regular} key={image.id} alt="" />
        ))}
      </div>
      <div className="error">{error.message}</div>
    </div>
  );
}

export default App;
