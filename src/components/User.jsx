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
<h1>
    {user.name}
</h1>
    </div>
)

}

export default User