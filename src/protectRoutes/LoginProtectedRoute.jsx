import { Navigate, Outlet } from "react-router-dom";

const LoginProtectedRoute = () => {
  // const user = JSON.parse(localStorage.getItem("userInfo"));
  const user =localStorage.getItem("accessToken");

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default LoginProtectedRoute;