import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('/friends')
            .then((res) => {
                setFriends(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div className="friends-list">
            <h2>Friends List</h2>
            <ul className='friend-list'>
                {friends.map((friend, index) => {
                    return <li key={index} className="friend-list-item">-{friend.name} -{friend.email}</li>
                })}
            </ul>
        </div>
    )
}

export default FriendsList;