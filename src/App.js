// import "./App.css";
// import { useState, useEffect } from "react";
// import SearchIcon from "@mui/icons-material/Search";
// import useFetch from "./useFetch";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Masonry from "react-masonry-css";
// import Loader from './Loader';

// function App() {
//   const axiosCall = useFetch;
//   const accessKey = process.env.REACT_APP_ACCESS_KEY;
//   const url = `https://api.unsplash.com/photos?client_id=${accessKey}&page=1&per_page=35`;
//   const [images, setImages] = useState([]);
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const [searchPhotos, setSearchPhotos] = useState("");
//   const [results, setResults] = useState([]);
//   const searchURL = `https://api.unsplash.com/search/photos?per_page=35&query=${searchPhotos}&client_id=${accessKey}`;

//   const alert = () => {
//     toast.error("Enter an Image name", {
//       position: toast.POSITION.TOP_CENTER,
//       autoClose: 3000,
//     });
//   };

//   useEffect(() => {
//     setIsLoading(true);
//     axiosCall(url)
//       .then((res) => {
//         setIsLoading(false);
//         setImages(res.data);
//       })
//       .catch((err) => {
//         setIsLoading(false);
//         setError(err);
//       });
//   }, [axiosCall, url]);

//   const handleChange = (e) => {
//     if (e.key === "Enter") {
//       if (searchPhotos.length === 0) {
//         alert();
//       } else {
//         setIsLoading(true);
//         axiosCall(searchURL)
//           .then((res) => {
//             setResults(res.data.results);
//             setSearchPhotos("");
//             setIsLoading(false);
//             setImages(results);
//           })
//           .catch((err) => {
//             setIsLoading(false);
//             setImages(images) || setImages(results)
//               ? setImages("")
//               : setError(err);
//           });
//       }
//     } 
//   };

//   const breakPoint = {
//     default: 4,
//     1280: 3,
//     1024: 2,
//     700: 1
//   }

//   return (
//     <div className="App">
//       <div className="top">
//         <h1>Dellons Gallery</h1>
//         <h2>No 1 world HD photos gallery website sourced from unsplash</h2>
//         <div className="search-bar">
//           <input
//             type="text"
//             value={searchPhotos}
//             onChange={(e) => setSearchPhotos(e.target.value)}
//             placeholder="Search photos"
//             onKeyPress={handleChange}
//           />
//           <ToastContainer />
//           <SearchIcon className="search-icon" />
//         </div>
//       </div>

//       <Masonry
//         breakpointCols={breakPoint}
//         className="my-masonry-grid"
//         columnClassName="my-masonry-grid_column"
//       >
//         {!isLoading ? (
//           images.map((image) => (
//             <div className="random-img" key={image.id}>
//               <img src={image?.urls?.regular} alt="" />
//               {/* <a
//                 href={`${image?.urls?.regular}?dl=`}
//                 download
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <MdDownloadForOffline />
//               </a> */}
//             </div>
//           ))
//         ) : (
//           <div className="loading">
//             <Loader />
//           </div>
//         )}

//         {results.map((result) => (
//           <div className="search-img" key={result.id}>
//             <img src={result?.urls?.regular} alt="" />
//           </div>
//         ))}
//       </Masonry>
//       <div className="error">{error.message}</div>
//     </div>
//   );
// }

// export default App;



import "./App.css";
import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import Masonry from "react-masonry-css";
import Loader from "./Loader";
import Search from "./Search";

function App() {
  const axiosCall = useFetch;
  const accessKey = process.env.REACT_APP_ACCESS_KEY;
  const url = `https://api.unsplash.com/photos?client_id=${accessKey}&page=1&per_page=35`;
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);

 

  useEffect(() => {
    setIsLoading(true);
    axiosCall(url)
      .then((res) => {
        setIsLoading(false);
        setImages(res.data);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [axiosCall, url]);


  const breakPoint = {
    default: 4,
    1280: 3,
    1024: 2,
    700: 1,
  };

  return (
    <div className="App">
      <Search searchKey={accessKey} images={images} setImages={setImages} results={results} setResults={setResults} setIsLoading={setIsLoading} setError={setError}/>

      <Masonry
        breakpointCols={breakPoint}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {!isLoading ? (
          images.map((image) => (
            <div className="random-img" key={image.id}>
              <img src={image?.urls?.regular} alt="" />
              {/* <a
                href={`${image?.urls?.regular}?dl=`}
                download
                onClick={(e) => e.stopPropagation()}
              >
                <MdDownloadForOffline />
              </a> */}
            </div>
          ))
        ) : (
          <div className="loading">
            <Loader />
          </div>
        )}

        {results.map((result) => (
          <div className="search-img" key={result.id}>
            <img src={result?.urls?.regular} alt="" />
          </div>
        ))}
      </Masonry>
      <div className="error">{error.message}</div>
    </div>
  );
}

export default App;
