import React, { useEffect, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import ProtectedRoute from "../Components/others/ProtectedRoute.jsx";
import Navbar from "../Components/others/Navbar.jsx";
import Footer from "../Components/others/Footer.jsx";

import { routeConfig, Loader } from "./routes";
import "../assets/css/App.css";
import { getCurrentUser } from "../Components/requests/auth.js";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const darkMode = useSelector((state) => state.app.darkMode);
  const loggedIn = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    if (loggedIn?.loggedIn === false) {
      const getUser = async () => {
        await getCurrentUser(dispatch);
      };
      getUser();
    }
  }, []);

  const renderRoute = (route) => {
    const RouteComponent = route.element;

    if (route.protected) {
      return (
        <Route
          key={route.path}
          path={route.path}
          element={
            <ProtectedRoute
              allowedRoles={route.roles || []}
              allowPendingAccess={route.allowPendingAccess}
            >
              <Suspense fallback={<Loader />}>
                <RouteComponent />
              </Suspense>
            </ProtectedRoute>
          }
        />
      );
    }

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          <Suspense fallback={<Loader />}>
            <RouteComponent />
          </Suspense>
        }
      />
    );
  };

  // Hide footer if the pathname starts with "/speeddating/{id}"
  const hideFooter = pathname.startsWith("/speeddating/");

  return (
    <div className={`${darkMode ? "dark " : ""}`}>
      <Navbar loggedIn={loggedIn} />
      <div className="bg-pink-50 dark:bg-rose-950 dark:text-white min-h-screen">
        <ScrollToTop />
        <Routes>{routeConfig.map(renderRoute)}</Routes>
      </div>
      {!hideFooter && <Footer />}
    </div>
  );
}
