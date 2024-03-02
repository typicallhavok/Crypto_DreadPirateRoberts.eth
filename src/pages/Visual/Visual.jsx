import { useLocation } from "react-router-dom";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./Visual.css";

const Visual = () => {
    const location = useLocation();
    // const navigate = useNavigate();

    const txData=location.state.txData;
    console.log(txData)
    const inputs = txData.inputs.map(input => input.prev_out.addr);
    const outputs = txData.out.map(output => output.addr);
    const redirectToVisual = () => {
        window.location.href=`https://oxt.me/transaction/${txData.hash}`;
    };
    const totalAmountSent = txData.out.reduce((total, output) => {
        return total + output.value;
    }, 0) / 100000000; 

    console.log("Sender Address:", inputs);
    console.log("Receiver Address:", outputs);
    console.log("Amount Sent (BTC):", totalAmountSent);
    console.log("Transaction Data:", txData);
    return(
        <>
        <h1>Transactions</h1>
        <div className="container1">
            <button onClick={redirectToVisual}>View transaction flow</button>
            <div className="txDets">
                <div className="txInputs">
                    {inputs.map((input, index) => (
                    <span onClick="" className="eachTx" key={index}>{input}</span>
                    ))}
                </div>
                <div className="txOutputs">
                    {outputs.map((output, index) => (
                    <span className="eachTx" key={index}>{output}</span>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}





export default Visual;