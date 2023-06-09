import { Link } from "react-router-dom";
import notFound from "../../assets/404-page-animation-example.gif";

const ErrorPage = () => {
  return (
    <div className="mx-auto text-center">
      <img
        src={notFound}
        alt="404 Page Not Found"
        className="w-2/4 mx-auto"
      />
      <h2 className="text-5xl font-bold mb-6">Oops! Page not found.</h2>
      <p className="text-gray-600 mb-6">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="text-blue-500 underline btn btn-outline btn-primary hover:text-blue-700 "
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
