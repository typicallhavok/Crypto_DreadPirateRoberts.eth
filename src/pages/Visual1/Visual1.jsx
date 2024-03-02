import { useLocation } from "react-router-dom";
// import React, { useState } from "react";
import "./Visual.css";

const Visual1 = () => {
    const location = useLocation();
    const wallet=location.state.walletData;
    console.log(wallet);
    return (
        <>
        
        
        </>
    )




}



export default Visual1;