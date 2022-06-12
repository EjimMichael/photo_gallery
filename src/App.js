import './App.css';
import {useState, useEffect } from 'react';
import axios from 'axios';
import SearchIcon from "@mui/icons-material/Search";

function App() {
  const accessKey = process.env.REACT_APP_ACCESS_KEY;
  const url = `https://api.unsplash.com/photos/?client_id=${accessKey}`;
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');

  const [searchPhotos, setSearchPhotos] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get(url)
    .then(res => {
      setImages(res.data);
    }).catch(err => {
      console.log(err);
      setError(err);
    })
  }, [url]);

  const handleChange = (e) => {
    const searchURL = `https://api.unsplash.com/search/photos?page=1&query=${searchPhotos}&client_id=${accessKey}`;

    if (e.key === "Enter") {
      axios.get(searchURL).then((res) => {
        setResults(res.data.results);
        setImages("");
        setImages(results);
        console.log(res.data);
      });
    }
  };

  return (
    <div className="App">
      <h1>Dellons Photo Gallery</h1>
      <div className="search-bar">
        <SearchIcon className="search-icon" />
        <input
          type="text"
          onChange={(e) => setSearchPhotos(e.target.value)}
          placeholder="Search photos"
          onKeyPress={handleChange}
        />
      </div>
      <div className="images">
        {results.map((result) => (
          <img src={result.urls.regular} key={result.id} alt="" />
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
