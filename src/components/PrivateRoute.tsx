import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";
import React from "react";

interface PrivateRouteProps {
  component: React.ReactNode;
}

export default function PrivateRoute({ component }: PrivateRouteProps) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? component : <Navigate to="/login" />;
}