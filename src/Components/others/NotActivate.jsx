import { Link } from "react-router-dom";
import { RiErrorWarningFill } from "react-icons/ri";

export default function NotActivated() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <div className="text-center">
        <div className="flex items-center justify-center text-yellow-500 mb-4">
          <RiErrorWarningFill className="text-8xl" />
        </div>
        <h1 className="text-6xl font-bold mb-4">Account Not Activated</h1>
        <h2 className="text-2xl mb-6">Oops! Activation Required</h2>
        <p className="text-lg mb-8">
          Please activate your account to access this page.
        </p>
        <Link
          to="/resend-activation"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          Resend Activation Email
        </Link>
      </div>
    </div>
  );
}
