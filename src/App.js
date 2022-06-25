import "./App.css";
import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import Masonry from "react-masonry-css";
import Loader from "./Loader";
import Search from "./Search";
import ImgSrc from "./ImgSrc";

function App() {
  const axiosCall = useFetch;
  const accessKey = process.env.REACT_APP_ACCESS_KEY;
  const url = `https://api.unsplash.com/photos?client_id=${accessKey}&page=1&per_page=50`;
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
      <Search
        searchKey={accessKey}
        images={images}
        setImages={setImages}
        results={results}
        setResults={setResults}
        setIsLoading={setIsLoading}
        setError={setError}
      />

      <Masonry
        breakpointCols={breakPoint}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {results.map((result) => (
          <div className="search-img" key={result.id}>
            <ImgSrc result={result} />
          </div>
        ))}
        {!isLoading ? (
          images.map((image) => (
            <div className="random-img" key={image.id}>
              <ImgSrc image={image} />
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
      </Masonry>
      <div className="error">{error.message}</div>
    </div>
  );
}

export default App;
