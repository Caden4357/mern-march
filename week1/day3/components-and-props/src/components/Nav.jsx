import React from "react";
import './Nav.css'
const Nav = (props) => {
    console.log(props);
    let {name} = props
    return(
        <div className="d-flex jc-between align-center nav-grey">
            <h1>Hello {name}</h1>
            <span>Link</span>
            <span>Link</span>
            <span>Link</span>
            <span>Link</span>
            <button className='custom-btn'>Add</button>
        </div>
    )
    
}
export default Nav;


