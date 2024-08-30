import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import PropTypes from 'prop-types';
import Profile from '../pages/Profile';

function Privateroute({children}) {
    const { currentUser } = useSelector((state) => state.user);

  if (!currentUser) {
    // If not signed in, redirect to the sign-in page
    return <Navigate to="/signin" />;
  }

  // If signed in, render the protected component
  return children;
}

Privateroute.propTypes = {
    children: PropTypes.node.isRequired,
  };
export default Privateroute
