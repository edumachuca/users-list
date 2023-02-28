import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './components/User';
import UserList from './components/UserList';
import { Box, ChakraProvider } from '@chakra-ui/react';

function App() {
	return (
		<ChakraProvider>
			<Box w="100%" p={10}>
				<Router>
					<Routes>
						<Route path="/" element={<UserList />} />
						<Route path="/users/:id" element={<User />} />
					</Routes>
				</Router>
			</Box>
		</ChakraProvider>
	);
}
export default App;
