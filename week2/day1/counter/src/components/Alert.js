import React, {useState} from 'react';

const Alert = (props) => {
    const alertButton = () => {
        alert('you clicked me')
    }
    return (
        <div>
            <h1>Synthetic Events</h1>
            <button onClick={alertButton}>Click me!</button>
        </div>
)}

export default Alert;