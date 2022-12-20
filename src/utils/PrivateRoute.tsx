import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import SignIn from "../pages/SignIn";

const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { user } = useSelector((state: RootState) => state.Auth);

  return user?.token ? children : <SignIn />;
};

export default PrivateRoute;
