import './App.css';
import {useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const accessKey = process.env.REACT_APP_ACCESS_KEY;
  const url = `https://api.unsplash.com/photos/?client_id=${accessKey}`;
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(url)
    .then(res => {
      setImages(res.data);
    }).catch(err => {
      console.log(err);
      setError(err);
    })
  }, [url]);

  return (
    <div className="App">
      <h1>Photo Gallery</h1>
      {images.map(image => (
        <img src={image.urls.small}
        key={image.id}
        alt=""
        />
      ))}
      <div className="error">{error.message}</div>
    </div>
  );
}

export default App;
