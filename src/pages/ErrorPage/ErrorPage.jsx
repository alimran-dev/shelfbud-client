import { Link, useRouteError } from "react-router-dom";
import errorImg from "../../assets/error.jpg";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center min-h-screen">
      <div className="flex-1 flex items-center justify-center">
        <img src={errorImg} alt="" className="w-2/3" />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center space-y-5">
        <p className="text-6xl font-bold text-gray-700">{error?.status}</p>
        <p className="text-5xl lg:text-8xl font-bold text-gray-700">
          {error?.statusText}
        </p>
        <Link
          to={"/"}
          className="bg-gray-700 text-white py-1.5 px-3 rounded-md font-semibold"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
