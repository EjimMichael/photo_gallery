// import "./App.css";
// import { useState, useEffect } from "react";
// import SearchIcon from "@mui/icons-material/Search";
// import useFetch from "./useFetch";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { MdDownloadForOffline } from "react-icons/md";


// function App() {
//   const axiosCall = useFetch;
//   const accessKey = process.env.REACT_APP_ACCESS_KEY;
//   const url = `https://api.unsplash.com/photos?client_id=${accessKey}`;
//   const [images, setImages] = useState([]);
//   const [error, setError] = useState("");

//   const [searchPhotos, setSearchPhotos] = useState("");
//   const [results, setResults] = useState([]);
//   const searchURL = `https://api.unsplash.com/search/photos?per_page=20&query=${searchPhotos}&client_id=${accessKey}&count=30`;

//   const alert = () => {
//     toast.error("Enter an Image name", {
//       position: toast.POSITION.TOP_CENTER,
//       autoClose: 3000,
//     });
//   };

//   useEffect(() => {
//     axiosCall(url)
//       .then((res) => {
//         setImages(res.data);
//         console.log(res.data);
//       })
//       .catch((err) => {
//         setError(err);
//       });
//   }, [axiosCall, url]);

//   const handleChange = (e) => {
//     if (e.key === "Enter") {
//       if (searchPhotos.length === 0) {
//         alert();
//       } else {
//         axiosCall(searchURL)
//           .then((res) => {
//             setResults(res.data.results);
//             setImages(results);
//             setSearchPhotos("");
//           })
//           .catch((err) => {
//             setImages(images) || setImages(results)
//               ? setImages("")
//               : setError(err);
//           });
//       }
//     }
//   };

//   return (
//     <div className="App">
//       <div className="top">
//         <h1>Dellons Photo Gallery</h1>
//         <div className="search-bar">
//           <input
//             type="text"
//             onChange={(e) => setSearchPhotos(e.target.value)}
//             placeholder="Search photos"
//             onKeyPress={handleChange}
//           />
//           <ToastContainer />
//           <SearchIcon className="search-icon" />
//         </div>
//       </div>
//       <div className="images">
//         {results.map((result) => (
//           <div className="md">
//             <img src={result?.urls?.regular} key={result.id} alt="" />
//             <a
//               // onClick={(e) => e.stopPropagation()}
//               href={`${result?.urls?.regular}?dl=`}
//               download
//               // key={result.id}
//             >
//               <MdDownloadForOffline />
//             </a>
//           </div>
//         ))}
//       </div>

//       <div className="images">
//         {images.map((image) => (
//           <img src={image.urls.regular} key={image.id} alt="" />
//         ))}
//       </div>
//       <div className="error">{error.message}</div>
//     </div>
//   );
// }

// export default App;



// import './App.css';
// import {useState, useEffect } from 'react';
// import SearchIcon from "@mui/icons-material/Search";
// import useFetch from './useFetch';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { MdDownloadForOffline } from 'react-icons/md';
// import { saveAs } from "file-saver";
// import { click } from '@testing-library/user-event/dist/click';

// function App() {
//   // const client = createClient('563492ad6f9170000100000111f0f2e7839d43789b67f45f8133817c');
//   const axiosCall = useFetch;
//   // const accessKey = process.env.REACT_APP_ACCESS_KEY;
//   // const url = ` https://api.pexels.com/v1/curated?page=2&per_page=40`;
//   const [images, setImages] = useState([]);
//   const [error, setError] = useState('');

//   const [searchPhotos, setSearchPhotos] = useState("");
//   const [results, setResults] = useState([]);
//   // const searchURL = `https://api.pexels.com/v1/search?query=${searchPhotos}&per_page=15&page=1`;
//   const alert = () => {
//     toast.error('Enter an Image name', {
//       position: toast.POSITION.TOP_CENTER,
//       autoClose: 3000
//     });
//   }

//   useEffect(() => {
//     axiosCall(`https://api.pexels.com/v1/curated?per_page=20&page=5`)
//       .then((res) => {
//         console.log(res.data);
//         setImages(res.data);
//       })
//       .catch((err) => {
//         setError(err);
//       });
//   }, [axiosCall]);

//   const handleChange = (e) => {
//     if (e.key === "Enter") {
//       if (searchPhotos.length === 0) {
//         alert();
//       } else {
//          axiosCall(
//            `https://api.pexels.com/v1/search?query=${searchPhotos}&per_page=1&page=1`)
//            .then((res) => {
//              const url = window.URL.createObjectURL(new Blob([res.data]));
//              const link = document.createElement("a");
//              link.href = url;
//              link.setAttribute("download", "file.jpg");
//              link.click();

//              setResults(res.data);
//              setImages(results);
//              setSearchPhotos("");
//            })
//            .catch((err) => {
//              setImages(images) || setImages(results)
//                ? setImages("")
//                : setError(err);
//            });
//       }
//     }
//   };
//   const downloadImage = (results) => {
//     saveAs(results, "image.jpg"); // Put your image url here.
//   };


//   return (
//     <div className="App">
//       <div className="top">
//         <h1>Dellons Photo Gallery</h1>
//         <div className="search-bar">
//           <input
//             type="text"
//             onChange={(e) => setSearchPhotos(e.target.value)}
//             placeholder="Search photos"
//             onKeyPress={handleChange}
//           />
//           <ToastContainer />
//           <SearchIcon className="search-icon" />
//         </div>
//       </div>
//       <div className="images">
//         {results?.photos?.map((result) => (
//           <div className="md">
//             <img src={result.src.small} key={result.id} alt="" />
//             {console.log(results)}
//             <a
//               // href={`${result?.src?.small}?dl=`}
//               // download
//               href={`${result?.src?.small}`}
//               onClick={click}
//               // onClick={(e) => e.stopPropagation()}
//               // key={result.id}
//             >
//               <MdDownloadForOffline
//                 onClick={(results) => downloadImage(results)}
//               />
//             </a>
//           </div>
//         ))}
//       </div>

//       <div className="images">
//         {images?.photos?.map((photo) => (
//           <img src={photo.src.medium} key={photo.id} alt="" />
//         ))}
//         {/* {images?.photos?.map((image) => (
//           <img src={image?.src?.medium} key={image.id} alt ='' />
//         ))} */}
//       </div>
//       <div className="error">{error.message}</div>
//     </div>
//   );
// }

// export default App;



import "./App.css";
import { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import useFetch from "./useFetch";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdDownloadForOffline } from "react-icons/md";
import Masonry from "react-masonry-css";
import Loader from './Loader';

function App() {
  const axiosCall = useFetch;
  const accessKey = process.env.REACT_APP_ACCESS_KEY;
  const url = `https://api.unsplash.com/photos?client_id=${accessKey}`;
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [searchPhotos, setSearchPhotos] = useState("");
  const [results, setResults] = useState([]);
  const searchURL = `https://api.unsplash.com/search/photos?per_page=20&query=${searchPhotos}&client_id=${accessKey}&count=30`;

  const alert = () => {
    toast.error("Enter an Image name", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
  };

  useEffect(() => {
    setLoading(true);
    axiosCall(url)
      .then((res) => {
        setLoading(false);
        setImages(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [axiosCall, url]);

  const handleChange = (e) => {
    if (e.key === "Enter") {
      if (searchPhotos.length === 0) {
        alert();
      } else {
        setLoading(true);
        axiosCall(searchURL)
          .then((res) => {
            setResults(res.data.results);
            setLoading(false);
            setImages(results);
            setSearchPhotos("");
          })
          .catch((err) => {
            setLoading(false);
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

      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {!loading ? (
          results.map((result) => (
            <div className="md">
              <img src={result?.urls?.regular} key={result.id} alt="" />
            </div>
          ))
        ) : (
          <div className="loading">
            <Loader />
          </div>
        )}

        {!loading ? (
          images.map((image) => (
            <div className="mc">
              <img src={image.urls.regular} key={image.id} alt="" />
            </div>
          ))
        ) : (
          <div className="loading">
            <Loader />
          </div>
        )}
      </Masonry>
      <div className="error">{error.message}</div>
    </div>
  );
}

export default App;