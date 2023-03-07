import React, { useState } from 'react';
import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	Stack,
	Button,
	Heading,
	Text,
	useColorModeValue,
	useToast
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';

const { handleLogin } = useLogin();

const Login = () => {
	const [user, setUser] = useState('');
	const [password, setPassword] = useState('');
	const toast = useToast();
	const navigate = useNavigate();

	//const handleLogin = () => {
	//	if (user === USER && password === PASSWORD) {
	//		navigate('/');
	//	} else {
	//		toast({
	//			title: 'User or password are invalid',
	//			status: 'error',
	//			duration: 5000,
	//			isClosable: true
	///		});
	//	}
	//};

	return (
		<Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
			<Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
				<Stack align={'center'}>
					<Heading fontSize={'4xl'}>Sign in to your account</Heading>
					<Text fontSize={'lg'} color={'gray.600'}>
						to start using the website ✌️
					</Text>
				</Stack>
				<Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
					<Stack spacing={4}>
						<FormControl id="user">
							<FormLabel>User name</FormLabel>
							<Input type="user" value={user} onChange={(e) => setUser(e.target.value)} />
						</FormControl>
						<FormControl id="password">
							<FormLabel>Password</FormLabel>
							<Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
						</FormControl>
						<Stack spacing={10}>
							<Button
								onClick={() => handleLogin(user, password)}
								bg={'blue.400'}
								color={'white'}
								_hover={{
									bg: 'blue.500'
								}}
							>
								Sign in
							</Button>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Flex>
	);
};

export default Login;
