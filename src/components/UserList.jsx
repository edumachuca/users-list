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
    <div>
      <h1>UserList</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}><Link to={`/users/${user.id}`}>
            {user.name}
            </Link></li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
