import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import "./Visual.css";

const Visual = () => {
    const location = useLocation();
    const x=location.state.txData;
    console.log(x)
    return(
        <>
        {x.hash}
        </>
    )
}

export default Visual;