import { Box, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../api/users";


const User = () => {

   
    const {id} = useParams()
    console.log(id)

    const [user, setUser] = useState([]);

  useEffect(() => {
    getUser(id)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

return (
    <div>
<Card>
  <CardHeader>
    <Heading size='md'>{user.name}</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Username:
        </Heading>
        <Text pt='2' fontSize='sm'>
          {user.username}
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Email
        </Heading>
        <Text pt='2' fontSize='sm'>
          {user.email}
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Website
        </Heading>
        <Text pt='2' fontSize='sm'>
         {user.website}
        </Text>
      </Box>
    </Stack>
  </CardBody>
</Card>
    </div>
)

}

export default User