import { useToast } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
const LoginContext = React.createContext();
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const LoginProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	useEffect(() => {
		const authenticated = sessionStorage.getItem('isAuthenticated');
		setIsAuthenticated(authenticated ? true : false);
	}, []);
	return <LoginContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>{children}</LoginContext.Provider>;
};

LoginProvider.propTypes = {
	children: PropTypes.node.isRequired
};
const USER = 'admin';
const PASSWORD = 'admin';

export const useLogin = () => {
	const { isAuthenticated, setIsAuthenticated } = useContext(LoginContext);
	const navigate = useNavigate();
	const toast = useToast();
	const handleLogin = (user, password) => {
		if (user === USER && password === PASSWORD) {
			sessionStorage.setItem('isAuthenticated', true);
			setIsAuthenticated(true);
			navigate('/');
		} else {
			toast({
				title: 'User or password are invalid',
				status: 'error',
				duration: 5000,
				isClosable: true
			});
		}
	};

	const handleLogout = () => {
		sessionStorage.removeItem('isAuthenticated');
		setIsAuthenticated(false);
	};

	return { isAuthenticated, handleLogin, handleLogout };
};
