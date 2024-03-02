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
        window.open(`https://oxt.me/transaction/${txData.hash}`);
    };
    const totalAmountSent = txData.out.reduce((total, output) => {
        return total + output.value;
    }, 0) / 100000000; 

    console.log("Amount Sent (BTC):", totalAmountSent);
    console.log("Transaction Data:", txData);
    console.log(inputs.length);
    return(
        <>
        <h1>Transactions</h1>
        <div className="container1">
            <div className="track">
                {(totalAmountSent>16||inputs.length>30||outputs.length>30) && <div className="sus">This transaction is suspicious</div>}
                <button onClick={redirectToVisual}>View transaction flow</button>
            </div>
            <div className="txDets">
                <div className="txInputs">
                    <h2>Input Addreses</h2>
                    {inputs.map((input, index) => (
                    <span onClick="" className="eachTx" key={index}>{input}</span>
                    ))}
                </div>
                <div className="txOutputs">
                <h2>Output Addreses</h2>
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