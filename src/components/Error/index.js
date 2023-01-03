import errorImg from "./error.gif";
import "./error.scss";
const Error = () => {
  return (
    <div className="error d-flex align-items-center justify-content-center flex-column text-center">
      <img src={errorImg} alt="error message " className="mb-2"/>
      <div className="error__block ">
        <h2 className="error__title fs-4 fw-bold">Something went wrong!</h2>
        <p className="error__descr fs-5 fw-semibold">
          We have already sent message to fix this bag
        </p>
      </div>
    </div>
  );
};

export default Error;
