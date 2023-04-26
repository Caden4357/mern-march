import axios from 'axios';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Nav = (props) => {
    const navigate = useNavigate()
    const logout = () => {
        axios.post('http://localhost:8000/api/logout', {}, {withCredentials:true})
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div className='d-flex justify-content-evenly align-items-center'>
            <h1>Records Dot Com</h1>
            <div>
                <Link to={'/createAlbum/form'}>Post an album</Link>
                <br />
                <Link to={'/'}>Home</Link>
            </div>
            <Link to={'/login'}>Login</Link>
            <button onClick={logout}>Logout</button>
        </div>
)}

export default Nav;