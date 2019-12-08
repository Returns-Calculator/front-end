import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "./auth/react-auth0-spa";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin
    });

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && (
        <button onClick={() => logoutWithRedirect()}>Log out</button>
      )}

      {isAuthenticated && (
        <span>
          <Link to="/">Home</Link>&nbsp;
          <Link to="/profile">Profile</Link>
        </span>
      )}
    </div>
  );
};

export default NavBar;
