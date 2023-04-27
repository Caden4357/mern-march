import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
const Display = (props) => {
    const [allAlbums, setAllAlbums] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/allAlbums')
            .then((res) => {
                console.log(res);
                setAllAlbums(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <div className='border border-primary d-flex justify-content-evenly flex-wrap p-5'>
            {
                allAlbums.map((album) => (
                    <div className='border border-success w-25 m-5' key={album._id}>
                        <h2>{album.albumName}</h2>
                        <h2>{album.artist}</h2>
                        <h2>{album.releaseYear}</h2>
                        <span>Explicit? </span>
                        {
                            album.explicit?
                            <span>Yes</span>:
                            <span>No</span>
                        }
                        <br />
                        <Link to={`/oneAlbum/${album._id}`}>Details</Link>
                        <Link to={`/editAlbum/${album._id}`}>Edit</Link>
                    </div>
                ))
            }
        </div>
)}

export default Display;