import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Display = (props) => {
    const {tvShowList,setTvShowList} = props
    useEffect(() => {
        axios.get('http://localhost:8000/api/allShows')
            .then((response) => {
                console.log(response);
                setTvShowList(response.data.shows)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/deleteShow/${id}`)
            .then((res) => {
                console.log(res);
                const updatedShowList = tvShowList.filter((show) => show._id !== id)
                setTvShowList(updatedShowList)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div className='d-flex justify-content-between mt-5 flex-wrap'>
            {
                tvShowList.map((show) => (
                    <div key={show._id} className='border border-dark p-3 w-25'>
                        <h2>Title: {show.title}</h2>
                        <h2>Title: {show.releaseYear}</h2>
                        <h2>Title: {show.genre}</h2>
                        <Link to={`/editShow/form/${show._id}`} className='btn btn-secondary'>Edit</Link>
                        <br />
                        <button onClick={() => deleteHandler(show._id)} className='btn btn-danger'>Delete</button>
                        <br />
                        <Link to={`/oneShow/${show._id}`} className='btn btn-primary'>View</Link>
                    </div>
                ))
            }
        </div>
    )
}

export default Display;