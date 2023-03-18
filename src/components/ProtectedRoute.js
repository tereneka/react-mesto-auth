import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  element: Component,
  loggedIn,
  ...props
}) {
  return loggedIn ? (
    <Component {...props} />
  ) : (
    <Navigate to="/sign-up" replace />
  );
}
