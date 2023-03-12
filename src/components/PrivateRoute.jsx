import { Navigate } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';
import PropTypes from 'prop-types';
import React from 'react';



export function PrivateRoute({ children }) {
	const { isAuthenticated } = useLogin();
	if (!isAuthenticated) {
		// not logged in so redirect to login page with the return url
		return <Navigate to="/login" replace />;
	}

	// authorized so return child components
	return children;
}

PrivateRoute.propTypes = {
	children: PropTypes.node.isRequired
};
