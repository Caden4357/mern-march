import React from 'react';
import './Shows.css'

const Shows = (props) => {
    console.log(props.title);
    
    return (
        <div className='bg-primary'>
            <h2>Title: {props.title}</h2>
            <h3>Released in: {props.releaseYear}</h3>
            <button className='custom-btn'>Add</button>
        </div>
    );
}

export default Shows;
