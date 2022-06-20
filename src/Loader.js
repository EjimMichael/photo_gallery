import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="spinner">
      <TailSpin
        color="#00BFFF"
        height={80}
        width={80}
        ariaLabel="loading"
      />
    </div>
  );
};

export default Loader;
