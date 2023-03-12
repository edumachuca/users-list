import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './components/User';
import UserList from './components/UserList';
import { Box, ChakraProvider } from '@chakra-ui/react';
import Login from './components/Login';
import { LoginProvider } from './hooks/useLogin';
import { PrivateRoute } from './components/PrivateRoute';

function App() {
	return (
		<LoginProvider>
			<ChakraProvider>
				<Box w="100%" p={10}>
					<Router>
						<Routes>
							<Route
								path="/"
								element={
									<PrivateRoute>
										<UserList />
									</PrivateRoute>
								}
							/>
							<Route
								path="/users/:id"
								element={
									<PrivateRoute>
										<User />
									</PrivateRoute>
								}
							/>
							<Route path="/login" element={<Login />} />
						</Routes>
					</Router>
				</Box>
			</ChakraProvider>
		</LoginProvider>
	);
}
export default App;
