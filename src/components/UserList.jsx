import { Card, CardFooter, CardHeader, Heading, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../api/users";

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

  return (
    <div style={{
      backgroundColor: 'lightblue',
      width: '1000px',
      height: '1000px'
    }}>
      
      <h1>UserList</h1>
      <SimpleGrid minChildWidth='180px' spacing='40px'>
        {users.map((user) => (
          <Card style={{
            backgroundColor: 'aqua',
            width: '240px',
            height: '150px'
            
          }} color="tomato" key ={user.id}>
            <CardHeader>

            <Heading size='md'>{user.name}</Heading>
            </CardHeader>
          <CardFooter color="black">
            <Link to={`/users/${user.id}`}>
            See Details
            </Link>
            </CardFooter>
            </Card>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default UserList;
