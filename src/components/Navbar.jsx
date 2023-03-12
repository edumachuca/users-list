import React from 'react';
import { Box, Flex, HStack, Link, IconButton, Button, useDisclosure, Stack } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useLogin } from '../hooks/useLogin';

export default function Navbar() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { handleLogout } = useLogin();
	return (
		<Box bg={'gray.100'} px={4}>
			<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
				<IconButton
					size={'md'}
					icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
					aria-label={'Open Menu'}
					display={{ md: 'none' }}
					onClick={isOpen ? onClose : onOpen}
				/>
				<HStack spacing={8} alignItems={'center'}>
					<Box>Logo</Box>
					<HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
						<Link to="/">User List</Link>
					</HStack>
				</HStack>
				<Flex alignItems={'center'}>
					<Button onClick={handleLogout} fontSize={'sm'} fontWeight={400} variant={'link'}>
						Log out
					</Button>
				</Flex>
			</Flex>

			{isOpen ? (
				<Box pb={4} display={{ md: 'none' }}>
					<Stack as={'nav'} spacing={4}>
						<Link to="/">User List</Link>
					</Stack>
				</Box>
			) : null}
		</Box>
	);
}
