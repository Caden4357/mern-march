import React from 'react';

const Shows = (props) => {
    console.log(props.title);
    
    return (
        <div className='bg-primary'>
            <h2>Title: {props.title}</h2>
            <h3>Released in: {props.releaseYear}</h3>
        </div>
    );
}

export default Shows;
