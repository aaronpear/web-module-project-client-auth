import React, { useState, useHistory } from "react";

import axiosWithAuth from "../utils/axiosWithAuth";

const AddFriend = () => {
    const initialState = {
        name: '',
        email: ''
    }

    const [formValues, setFormValues] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('/friends', formValues)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="form-container">
            <h2>Add Friend</h2>
            <form onSubmit={handleSubmit}>
                <label>Friend Name</label>
                <input type='text' name='name' value={formValues.name} onChange={handleChange} />
                <label>Friend Email</label>
                <input type='email' name='email' value={formValues.email} onChange={handleChange} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddFriend;