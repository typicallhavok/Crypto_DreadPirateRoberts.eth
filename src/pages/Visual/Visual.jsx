import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import "./Visual.css";

const Visual = () => {
    const location = useLocation();
    const txData=location.state.txData;
    console.log(txData)
    const inputs = txData.inputs.map(input => input.prev_out.addr);
    const outputs = txData.out.map(output => output.addr);

    // Calculate total amount sent
    const totalAmountSent = txData.out.reduce((total, output) => {
        return total + output.value;
    }, 0) / 100000000; // Convert satoshi to BTC

    // Log transaction details
    console.log("Sender Address:", inputs);
    console.log("Receiver Address:", outputs);
    console.log("Amount Sent (BTC):", totalAmountSent);
    console.log("Transaction Data:", txData);
    return(
        <>
        {txData.hash}
        </>
    )
}





export default Visual;