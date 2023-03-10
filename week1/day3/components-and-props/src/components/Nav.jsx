import React from "react";

const Nav = (props) => {
    console.log(props);
    let {name} = props
    return(
        <div>
            <h1>Hello {name}</h1>
            <span>Link</span>
            <span>Link</span>
            <span>Link</span>
            <span>Link</span>
        </div>
    )
    
}
export default Nav;


