import React, {useState} from 'react';
import axios from 'axios'
const CreateAlbum = (props) => {
    const [album, setAlbum] = useState({
        albumName: '',
        artist: '',
        releaseYear: 1920,
        genre: 'Rock',
        explicit: false
    })
    const [errors, setErrors] = useState({})
 
    const changeHandler = (e) => {
        if(e.target.name === 'explicit'){
            setAlbum({...album, explicit: !album.explicit})
        }else{
            setAlbum({...album, [e.target.name]: e.target.value})
        }
    }
    

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/newAlbum', album)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors)
            })
    }
    return (
        <div>
            <h2>Post your favorite album</h2>
            <form className='w-25' onSubmit={submitHandler}>
                <label className='form-label'>Album Name:</label>
                <input className='form-control' type="text" onChange={changeHandler} value={album.albumName} name='albumName'/>
                {
                    errors.albumName?
                    <p className='text-danger'>{errors.albumName.message}</p>:
                    null
                }

                <label className='form-label' >Artist:</label>
                <input className='form-control' type="text" onChange={changeHandler} value={album.artist} name='artist'/>
                {
                    errors.artist?
                    <p className='text-danger'>{errors.artist.message}</p>:
                    null
                }
                <label className='form-label'>Release Year:</label>
                <input className='form-control' type="number" onChange={changeHandler} value={album.releaseYear} name='releaseYear'/>
                {
                    errors.releaseYear?
                    <p className='text-danger'>{errors.releaseYear.message}</p>:
                    null
                }
                <label className='form-label'>Genre:</label>
                <select className="form-select" name="genre" onChange={changeHandler} value={album.genre}>
                    <option value="Rock">Rock</option>
                    <option value="Alternative">Alternative</option>
                    <option value="Hip-hop/rap">Hip-hop/rap</option>
                    <option value="Pop">Pop</option>
                    <option value="Classical">Classical</option>
                    <option value="Metal">Metal</option>
                    <option value="Blues">Blues</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Country">Country</option>
                    <option value="R&B/Soul">R&B/Soul</option>
                </select>
                {
                    errors.genre?
                    <p className='text-danger'>{errors.genre.message}</p>:
                    null
                }
                <label className='form-label me-3'>Explicit?</label>
                <input className="form-check-input" type="checkbox" name="explicit" onChange={changeHandler} value={album.explicit}/>
                {
                    errors.explicit?
                    <p className='text-danger'>{errors.explicit.message}</p>:
                    null
                }
                <br />
                <button className='btn btn-primary'>Post Album</button>
            </form>
        </div>
)}

export default CreateAlbum;