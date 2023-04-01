import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; 
const PrivateRoute = (props) => {
  const { isAuth } = useContext(AuthContext);
  if (!isAuth) {
    return <Navigate to="/LoginPage" />;
  }
  return props.children;
};
export default PrivateRoute;
