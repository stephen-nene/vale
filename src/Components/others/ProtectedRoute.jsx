import { useSelector } from "react-redux";
import Unauthorised from "./Unauthorised.jsx";
import NotLoggedIn from "./NotLoggedIn.jsx";
import NotActivate from "./NotActivate.jsx";
import Suspended from "./Suspended.jsx";

const ProtectedRoute = ({ children, allowedRoles, allowPendingAccess }) => {
  const userData = useSelector((state) => state.user.userData);
  const darkMode = useSelector((state) => state.app.darkMode);

  if (!userData || !Object.keys(userData).length) {
    return <NotLoggedIn darkMode={darkMode} />;
  }

  if (userData.status === "deactivated") {
    return <Suspended darkMode={darkMode} />;
  }

  if (
    allowedRoles &&
    allowedRoles.length > 0 &&
    !allowedRoles?.includes(userData.role)
  ) {
    return <Unauthorised darkMode={darkMode} />;
  }
  // if (userData.status === "inactive" && !allowPendingAccess) {
  //   return <NotActivate user={userData} darkMode={darkMode} />;
  // }

  return children;
};

export default ProtectedRoute;
