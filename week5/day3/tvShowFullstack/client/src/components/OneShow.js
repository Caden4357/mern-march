import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
const OneShow = (props) => {
    const {id} = useParams()
    const [show, setShow] = useState({
        title:'',
        releaseYear:1920,
        network:'',
        creator:'',
        genre:''
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneShow/${id}`)
            .then((res) => {
                console.log(res.data.show);
                setShow(res.data.show)
            })
            .catch((err) => {
                console.log(err);
            })
    },[])
    return (
        <div>
            <h1>Title: {show.title}</h1>
            <h2>Aired on: {show.network}</h2>
            <h2>First episode aired in: {show.releaseYear}</h2>
            <h2>Created By: {show.creator}</h2>
            <h2>Genre: {show.genre}</h2>
        </div>
)}

export default OneShow;