import './App.css';
import {useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const accessKey = process.env.REACT_APP_ACCESS_KEY;
  const url = `https://api.unsplash.com/photos/?client_id=${accessKey}`;
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get(url)
    .then(res => {
      setImages(res.data);
      console.log(res.data);
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
    </div>
  );
}

export default App;
