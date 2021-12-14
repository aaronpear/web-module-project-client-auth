import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();

    const initialState = {
        username: '',
        password: ''
    }

    const [credentials, setCredentials] = useState(initialState);

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const login = (e) => {
        e.preventDefault();
        axios.post('http://localhost:9000/api/login', credentials)
            .then((res) => {
                const { token, role, username } = res.data;
                localStorage.setItem('token', token);
                localStorage.setItem('role', role);
                localStorage.setItem('username', username);
                history.push('/friends');
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className='login'>
            <h2>Login</h2>
            <form className='login-form' onSubmit={login}>
                <label>Username</label>
                <input type='text' name='username' value={credentials.username} onChange={handleChange} />
                <label>Password</label>
                <input type='password' name='password' value={credentials.password} onChange={handleChange} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login;