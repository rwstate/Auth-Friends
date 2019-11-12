import React, { useState, useEffect} from "react";
import {axiosWithAuth} from "../utils/utils";
import Friend from "./Friend";
import FriendForm from "./FriendForm";

const Friends = props => {
  const [friends, setFriends] = useState("")
  const [update, setUpdate ] = useState(0)

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => setFriends(res.data))
      .catch(err => console.log(err))
  }, [update])

  if (friends === "") {
    return(
      <h2>Loading friends</h2>
    )
  }

  return(
    <div>
      <FriendForm added={setUpdate} count={update}/>
      <div>
        {friends.map(el => <Friend friend={el}/>)}
      </div>
    </div>
  )
}

export default Friends;