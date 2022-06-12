// import { useState } from 'react';
// import axios from 'axios';

// const SearchField = () => {
//   const accessKey = process.env.REACT_APP_ACCESS_KEY;
  
//   const [searchPhotos, setSearchPhotos] = useState('');
//   const [results, setResults] = useState([]);

//     const handleChange = (e) => {
//       const searchURL = `https://api.unsplash.com/search/photos?page=1&query=${searchPhotos}&client_id=${accessKey}`;

//       if (e.key === "Enter") {
//         axios.get(searchURL).then((res) => {
//           setResults(res.data.results);
//           console.log(res.data);  
//         });
//       }
//       };


//   return (
//     <div className="input">
//       <input
//         type="text"
//         onChange={(e) => setSearchPhotos(e.target.value)}
//         placeholder="Search photos"
//         onKeyPress={handleChange}
//       />

//       {results.map((result) => (
//         <img src={result.urls.thumb} key={result.id} alt="" />
//       ))}
//     </div>
//   );
// }

// export default SearchField;