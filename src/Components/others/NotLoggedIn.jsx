import { Link } from "react-router-dom";
import { RiLoginCircleFill } from "react-icons/ri";

export default function NotLoggedIn() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <div className="flex items-center justify-center text-red-500 mb-4">
        <RiLoginCircleFill className="text-8xl" />
      </div>
      <h1 className="text-6xl font-bold mb-4">403</h1>
      <h2 className="text-2xl mb-6">Not Logged In</h2>
      <p className="text-lg mb-8">You need to log in to access this page.</p>
      <Link
        to="/login"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
      >
        Go to Login
      </Link>
    </div>
  );
}
