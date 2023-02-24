import React from "react";

const Button = (props) => {
    return (
        <button type={props.type} className="btn">Search{props.children}</button>
    )
}

export default Button