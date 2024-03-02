import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";
import searchImg from "./Search.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
    // const [error, setError] = useState(null);
    const [searchFor, setInputValue] = useState("");
    // const navigate = useNavigate();

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };


    function getTransactionDetails(txHash) {
    fetch(`https://blockchain.info/rawtx/${txHash}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(transactionData => {
            // Extract sender and receiver addresses
            const inputs = transactionData.inputs.map(input => input.prev_out.addr);
            const outputs = transactionData.out.map(output => output.addr);

            // Calculate total amount sent
            const totalAmountSent = transactionData.out.reduce((total, output) => {
                return total + output.value;
            }, 0) / 100000000; // Convert satoshi to BTC

            // Log transaction details
            console.log("Sender Address:", inputs);
            console.log("Receiver Address:", outputs);
            console.log("Amount Sent (BTC):", totalAmountSent);
            console.log("Transaction Data:", transactionData);
        })
        .catch(error => {
            // Handle errors
            console.error('Error fetching transaction data:', error);
        });
}

// Example usage:
const txHash = "e8b406091959700dbffcff30a60b190133721e5c39e89bb5fe23c5a554ab05ea"; // Replace this with the hash of the transaction you want to query
getTransactionDetails(txHash);

    return (
        <>
            <div className="container">
                <div className="head">
                    <h2>Welcome to CrypView</h2>
                </div>
                <form id="search">
                    <div className="search">
                        <input
                            type="text"
                            className="searchFor"
                            placeholder="Enter a transaction hash or wallet address to check all transactions"
                            value={searchFor}
                            onChange={handleInputChange}
                            required
                        />
                        <button className="searchBtn">
                            <img
                                src={searchImg}
                                alt="Search"
                                className="searchImg"
                            />
                        </button>
                    </div>
                </form>
                <div className="error">
                    {/* {error && (
                        <div className="alert alert-danger">
                            {error.message}
                        </div>
                    )} */}
                </div>
            </div>
        </>
    );
};

export default Home;