import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";
import searchImg from "./Search.png";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [error, setError] = useState(null);
    const [searchFor, setInputValue] = useState("");
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const checkType = (chkstr) => {
        if (chkstr.length>=64) {getTransactionDetails(chkstr)}
        else {getWalletDetails(chkstr)}
    }
    

    const getWalletDetails = async (walletAddr) => {
        try {
            const response = await axios.get(`https://blockchain.info/rawaddr/${walletAddr}`);
            const data = response.data;
            navigate(`/Visual1/${data.address}`, {
                state: { walletData: data },
            });
        } catch (error) {
            setError(error.message);
        }
    };
    

    const getTransactionDetails = async (txHash) =>{
        try {
            const response = await fetch(`https://blockchain.info/rawtx/${txHash}`);
            const data = await response.json();
            navigate(`/Visual/${data.hash}`, {
                state: { txData: data },
            });
        } catch (error) {
            setError(error.message);
        }
    };
    

    return (
        <>
            <div className="container">
                <div className="head">
                    <h2>Welcome to CrypView</h2>
                </div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    checkType(searchFor);
                }} id="search">

                    <div className="search">
                        <input
                            type="text"
                            className="searchFor"
                            placeholder="Enter a transaction hash or wallet address to check all transactions"
                            value={searchFor}
                            onChange={handleInputChange}
                            required
                        />
                        <button className="searchBtn" value="submit">
                            <img
                                src={searchImg}
                                alt="Search"
                                className="searchImg"
                            />
                        </button>
                    </div>
                </form>
                <div className="error">
                    {error && (
                        <div className="alert alert-danger">
                            {error.message}
                        </div>
                    )} 
                </div>
            </div>
        </>
    );
};

export default Home;