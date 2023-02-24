import React, { useEffect, useState } from "react";


const City = ({ name, main }) => {

    // console.log(main)

    return (
        <div>

            <h1>{name}</h1>
            <h2>{Math.round(main?.temp)} °C</h2>
            <p>Max: {Math.round(main?.temp_max)}  Min:{Math.round(main?.temp_min)}</p>

        </div>
    )
};

export default City;
