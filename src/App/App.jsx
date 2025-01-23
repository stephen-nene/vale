import React, { useEffect, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";

import  ProtectedRoute from "../Components/others/ProtectedRoute.jsx"
import Navbar from "../Components/others/Navbar.jsx";
import Footer from "../Components/others/Footer.jsx";


import { routeConfig, Loader } from "./routes";
import "../assets/css/App.css";
import { getCurrentUser } from "../Components/requests/auth.js";


export default function App() {

  const darkMode = useSelector((state) => state.app.darkMode);
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loggedIn === false) {
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
  
    return (
      <div className={`${darkMode ? "dark " : ""} `}>
        <Navbar darkMode={darkMode} />
        <div className="bg-pink-50 dark:bg-rose-950  dark:text-white min-h-screen ">
          <Routes>{routeConfig.map(renderRoute)}</Routes>
        </div>
        <Footer />
      </div>
    );
  
  // return (
  //   <>
  //     <Navbar />
  //     <div className="min-h-screen">
  //       <Suspense fallback={<Loader />}>
  //         <Routes>
  //           <Route path="/" element={<Landing />} />
  //           <Route path="*" element={<Error404 />} />
  //           <Route path="/contact" element={<Contact />} />
  //           <Route path="/couples" element={<Couples />} />
  //           <Route path="/singles" element={<Singles />} />
  //           <Route path="/about" element={<About />} />
  //           <Route path="/login" element={<Login />} />
  //           <Route path="/signup" element={<Signup />} />
  //           <Route path="/reset" element={<Reset />} />
  //           <Route path="/forgot" element={<Forgot />} />
  //         </Routes>
  //       </Suspense>
  //     </div>
  //     <Footer />
  //   </>
  // );
}
