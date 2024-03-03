import { useLocation } from "react-router-dom";
// import React, { useState } from "react";
import "./Visual.css";

const Visual1 = () => {
    const location = useLocation();
    const wallet=location.state.walletData;
    console.log(wallet);
    return (
        <>
        <div className="walletAddr">{wallet.addr}</div>
        <div className="walletAddr">{wallet.inputs}</div>
        <div className="walletAddr">{wallet.prev_inputs}</div>
        </>
    )




}



export default Visual1;