import { useState } from 'react';
import axios from 'axios';

const SearchField = () => {
  const accessKey = process.env.REACT_APP_ACCESS_KEY;
  // https://api.unsplash.com/search/collections?page=1&query=${searchPhotos}&client_id=${accessKey}
  
  const [searchPhotos, setSearchPhotos] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (e) => {    
      setSearchPhotos(e.target.value); 
  };

    const handleSubmit = (e) => {
      const url = `https://api.unsplash.com/search/photos?page=1&query=${searchPhotos}&client_id=${accessKey}`;

      if (e.key === "Enter") {
        axios.get(url).then((res) => {
          setResults(res.data.results);
          // setResults(""); 
          console.log(res.data);  
        });
      }
      };


  return (
    <div className="input">
      <input
        type="text"
        onChange={handleChange}
        placeholder="Search photos"
        onKeyPress={handleSubmit}
      />
      <button onClick={handleSubmit} type="submit">
        Search
      </button>

      {results.map((result) => (
        <img src={result.urls.thumb} key={result.id} alt="" />
      ))}
    </div>
  );
}

export default SearchField;