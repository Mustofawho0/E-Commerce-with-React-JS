import { useLocation, useNavigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const nav = useNavigate();

  let usersData = localStorage.getItem("dataUser");
  usersData = JSON.parse(usersData);
  //   console.log(usersData);
  const location = useLocation();
  const logedInProtectedPath = ["/login", "/register"];

  //   if (
  //     (usersData?.id && location?.pathname === "/login") ||
  //     (usersData?.id && location?.pathname === "/register")
  //   )
  if (usersData?.id && logedInProtectedPath?.includes(location?.pathname))
    return nav("/product");

  return <>{children}</>;
};
