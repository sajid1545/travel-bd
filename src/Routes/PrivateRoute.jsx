import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './../Context/UserContext';

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();

	if (loading) {
		return (
			<div className="flex justify-center min-h-screen items-center">
				<div className="w-16 h-16 mx-auto border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
			</div>
		);
	}

	if (user?.emailVerified) {
		return children;
	}

	return <Navigate to={'/login'} state={{ from: location }} replace />;
};

export default PrivateRoute;
