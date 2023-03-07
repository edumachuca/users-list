import React, { useContext, useEffect, useState } from 'react'
const LoginContext = React.createContext()

export const LoginProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <LoginContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </LoginContext.Provider>
  )
}

const USER = 'admin';
const PASSWORD = 'admin'

export const useLogin = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(LoginContext)


const handleLogin=(user, password)=>{
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

const handleLogout=()=>{
sessionStorage.removeItem('isAuthenticated');
setIsAuthenticated(false)
}

  useEffect(() => {
   const authenticated = sessionStorage.getItem('isAuthenticated');
setIsAuthenticated(authenticated ? true : false)
  }, []);

  return { isAuthenticated, handleLogin, handleLogout }
}}