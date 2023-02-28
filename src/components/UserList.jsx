import { Card, CardFooter, CardHeader, Heading, SimpleGrid, Button, useToast, Box } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUsers } from '../api/users';

const UserList = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getUsers()
			.then((res) => {
				//console.log(res.data);
				setUsers(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const toast = useToast();

	const handleDelete = (id) => {
		// We need to pass the id of the item we want to delete
		axios
			.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then(() => {
				const newUsers = users.filter((user) => user.id !== id);
				setUsers(newUsers);
				toast({
					title: 'User successfully deleted',
					status: 'success',
					duration: 5000,
					isClosable: true
				});
			})
			.catch((err) =>
				toast({
					title: err.message,
					status: 'error',
					duration: 5000,
					isClosable: true
				})
			);
	};

	return (
		<Box>
			<Heading mb={5}>Users</Heading>
			<SimpleGrid justifyContent="center" minChildWidth="180px" spacing="40px">
				{users.map((user) => (
					<Card key={user.id}>
						<CardHeader>
							<Heading size="md">{user.name}</Heading>
						</CardHeader>
						<CardFooter>
							<Link to={`/users/${user.id}`}>See details</Link>
							<Button ml={5} colorScheme="red" size="md" onClick={() => handleDelete(user.id)}>
								Delete
							</Button>
						</CardFooter>
					</Card>
				))}
			</SimpleGrid>
		</Box>
	);
};

export default UserList;
