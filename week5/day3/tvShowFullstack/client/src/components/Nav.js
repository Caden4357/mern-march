import React, {useState} from 'react';
import {Link} from 'react-router-dom'

const Nav = (props) => {
    return (
        <div>
            <h1>Welcome to our TV Show app</h1>
            <Link to={'/createShow/form'}>Post your favorite show</Link>
            <br/>
            <Link to={'/'}>Home</Link>
        </div>
)}

export default Nav;