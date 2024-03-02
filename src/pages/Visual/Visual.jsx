import { useLocation } from "react-router-dom";
// import React, { useState } from "react";
import "./Visual.css";

const Visual = () => {
    const location = useLocation();

    const txData=location.state.txData;
    const inputs = txData.inputs.map(input => input.prev_out.addr);
    const outputs = txData.out.map(output => output.addr);
    const redirectToVisual = () => {
        window.open(`https://oxt.me/transaction/${txData.hash}`);
    };
    const totalAmountSent = txData.out.reduce((total, output) => {
        return total + output.value;
    }, 0) / 100000000; 

    const checkExchange = (addr) => {
        if  (addr.startsWith('bc1qm')||addr.startsWith('1NDy')||addr.startsWith('1HDWA')){return 'Bitcoin Binance'}
        else if (addr.startsWith('T')){return 'Tron'}
        else if (addr.startsWith('0x28C')){return 'Ethereum Binance'}
        else if (addr.startsWith('0x776')||addr.startsWith('0xA9D')||addr.startsWith('0xc7b')||addr.startsWith('0x9bf')){return 'Ethereum Coinbase'}
        else if (addr.startsWith('bc1qg')){return 'Bitcoin Roobet'}
        else if (addr.startsWith('0x492')){return 'BNB Kraken'}
        else if (addr.startsWith('38MfJ')||addr.startsWith('3Nh28')||addr.startsWith('1MMdV')){return 'Bitcoin Coinbase'}
        else if (addr.startsWith('3E2ad')||addr.startsWith('36XWT')||addr.startsWith('1Kd6z')){return 'Bitcoin Kraken'}
        else if (addr.startsWith('0x89e')){return 'Ethereum Kraken'}
    };

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
                    <span className="eachTx" key={index}>{input}{checkExchange(input) && <div className="exch">{checkExchange(input)}</div>}</span>
                    ))}
                </div>
                <div className="txOutputs">
                <h2 className="out">Output Addreses</h2>
                    {outputs.map((output, index) => (
                    <span className="eachTx" key={index}>{output}{checkExchange(output) && <div className="exch">{checkExchange(output)}</div>}</span>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}





export default Visual;