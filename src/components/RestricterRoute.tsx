import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import React from "react";

interface RestricterRouteProps {
  component: React.ReactNode;
}

export default function RestricterRoute({ component }: RestricterRouteProps) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to="/contacts" /> : component;
}