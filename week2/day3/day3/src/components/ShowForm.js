import React, { useState } from 'react';

const ShowForm = (props) => {

    let bool = true

    const [show, setShow] = useState({
        title:'',
        releaseYear:1920,
        genre:''
    })

    const changeHandler = (e) => {
        setShow({...show, [e.target.name]:e.target.value})
        // setShow(prevState => ({...prevState, [e.target.name]:e.target.value }))
    }

    return (
        <div>
            <h1>Add Your Favorite TV Show!📺</h1>
            {/* {
                // if(bool){
                //     <p>Boolean variable is true</p>:
                // }
                // else{
                //     <p>Boolean variable is false</p>
                // }
                bool?
                <p>Boolean variable is true</p>:
                <p>Boolean variable is false</p>
            } */}
            <form>
                <div>
                    <label>Title:</label>
                    <input type="text" name="title" onChange={changeHandler} />
                    {
                        show.title.length < 3?
                        <p>The title must be 3 or more characters</p>:
                        null
                    }
                </div>
                <div>
                    <label>Release Year:</label>
                    <input type="number" name="releaseYear" onChange={changeHandler} />
                    {
                        show.releaseYear < 1920?
                        <p>The release must be 1920 or newer</p>:
                        null
                    }
                </div>
                <div>
                    <label>Genre:</label>
                    <input type="text" name="genre" onChange={changeHandler} />
                    {
                        show.genre.length < 3?
                        <p>The title must be 3 or more characters</p>:
                        null
                    }
                </div>
                <button>Add Show</button>
            </form>
        </div>
    )
}

export default ShowForm;