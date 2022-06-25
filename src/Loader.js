import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="spinner">
      <TailSpin
        color="#000"
        height={50}
        width={50}
        ariaLabel="loading"
        text-align="center"
      />
      
    </div>
  );
};

export default Loader;
