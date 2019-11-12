import React, { useState } from "react";
import { axiosWithAuth } from "../utils/utils"

const FriendForm = props => {
  const [newFriend, setNewFriend] = useState({
    id: Date.now(),
    name: "",
    age: "",
    email: ""
  });

  const handleChange = e=> {
    setNewFriend({...newFriend, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", newFriend)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    setNewFriend({
      id: Date.now(),
      name: "",
      age: "",
      email: ""
    })
    props.added(props.count + 1)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        type="text"
        name="name"
        value={newFriend.name}
        onChange={handleChange}
      />
      <input
        placeholder="Age"
        type="text"
        name="age"
        value={newFriend.age}
        onChange={handleChange}
      />
      <input
        placeholder="Email"
        type="text"
        name="email"
        value={newFriend.email}
        onChange={handleChange}
      />
      <button>Add friend</button>
    </form>
  );
};

export default FriendForm;
