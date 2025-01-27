// routes.js
import { lazy } from "react";

const AuthRoutes = {
  Login: lazy(() => import("../Components/Auth/Login.jsx")),
  Register: lazy(() => import("../Components/Auth/Signup.jsx")),
  Reset: lazy(() => import("../Components/Auth/Reset.jsx")),
  Forgot: lazy(() => import("../Components/Auth/Forgot.jsx")),
  Activate: lazy(() => import("../Components/Auth/Activate.jsx")),
};

import Landing from "../Components/pages/Landing.jsx";
import Error404 from "../Components/others/Error404.jsx";
import Contact from "../Components/pages/Contact.jsx";
import About from "../Components/pages/About.jsx";
import Profiles from "../Components/pages/Profiles.jsx";
import Features from "../Components/pages/Features.jsx";

import Requests from "../Components/pages/Requests.jsx";
import ViewRequest from "../Components/pages/ViewRequest.jsx";
import Couples from "../Components/pages/Couples.jsx";
import ValeReq from "../Components/pages/ValeReq.jsx";
import ViewVale from "../Components/pages/ViewVale.jsx";
import SpeedDating from "../Components/pages/SpeedDating/SpeedDating.jsx";
import ChatRoom from "../Components/pages/SpeedDating/ChatRoom.jsx";
import SpeedDatingCreate from "../Components/pages/SpeedDating/CreateSpeedDate.jsx";
import ViewSpeedDate from "../Components/pages/SpeedDating/ViewSpeedDate.jsx";

// Route configurations
export const routeConfig = [
  // Public Routes
  { path: "/", element: Landing },
  { path: "/login", element: AuthRoutes.Login },
  { path: "/register", element: AuthRoutes.Register },
  { path: "/forgot", element: AuthRoutes.Forgot },
  { path: "/activate/:token", element: AuthRoutes.Activate },
  { path: "/reset/:token", element: AuthRoutes.Reset },

  { path: "/contact", element: Contact },
  { path: "/requests", element: Requests },
  { path: "/request/:id", element: ViewRequest },
  { path: "/about", element: About },
  { path: "/valereq", element: ValeReq },
  { path: "/viewvale/:id", element: ViewVale },
  { path: "/features", element: Features },
  { path: "/speeddating", element: SpeedDating },
  { path: "/speeddate/:id", element: ViewSpeedDate, protected: true },
  { path: "/speeddating/:id", element: ChatRoom, protected: true },
  {
    path: "/speeddating/create",
    element: SpeedDatingCreate,
    protected: true,
    // allowPendingAccess: false,
  },

  // Protected Routes
  {
    path: "/profile",
    element: Profiles,
    protected: true,
    allowPendingAccess: true,
  },
  {
    path: "/couples",
    element: Couples,
    protected: true,
    allowPendingAccess: true,
  },

  // 404 Route
  { path: "*", element: Error404 },
];

// Loading fallback component
export const Loader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div role="status" className="max-w-sm animate-pulse text-center">
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);
