import React, {useState} from 'react';

const Shows = (props) => {
    //      Getter        Setter
    const [copiesSold, setCopiesSold] = useState(props.sales)
    
    const increaseSales = () => {
        // ! Either way works for updating state 
        // setCopiesSold(copiesSold+1)
        setCopiesSold(prevState => prevState+1)
    }


    return (
        <div className='bg-primary'>
            <h2>Title: {props.title}</h2>
            <h3>Released in: {props.releaseYear}</h3>
            <h3>Copies Sold: {copiesSold}</h3>
            <button onClick={increaseSales} className='custom-btn'>Buy</button>
        </div>
    );
}

export default Shows;