import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";
import searchImg from "./Search.png";
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
            const response = await fetch(`https://blockchain.info/rawaddr/${walletAddr}`);
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            const data = await response.json();
            navigate(`/Visual1/${data.address}`, {
                state: { walletData: data },
            });
        } catch (error) {
            setError(error.message);
        }
    };

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          authorization: 'Basic <redacted>'
        }
    };
    
    const fetchData = async (walletAddr) => {
        try {
          const response = await fetch(`https://api.chainabuse.com/v0/reports?address=${walletAddr}&includePrivate=false&page=1&perPage=50`,options);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const responseData = await response.json();
        //   console.log(responseData);
        } catch (error) {
          setError(error);
        } finally {
          return null;
        }
    };

    const getTransactionDetails = async (txHash) =>{
        if(!txHash.startsWith( "0x" )){
            try {
                const response = await fetch(`https://blockchain.info/rawtx/${txHash}`);
                const data = await response.json();
                navigate(`/Visual/${data.hash}`, {
                    state: { txData: data },
                });
            } catch (error) {
                setError(error.message);
            }
        } else {
            try {
                const fetchUrl = `https://api.etherscan.io/api?module=account&action=txlist&address=${txHash}&startblock=0&endblock=2702578&page=1&offset=10&sort=asc&apikey=<redacted>`;
                const response = await fetch(fetchUrl);
                const data = await response.json();
                navigate(`/Visual/${data.hash}`, {
                    state: { txData: data },
                });
            } catch (error) {
                setError(error.message);
            }
        }};
    

    return (
        <>
            <div className="container">
                <div className="head">
                    <h2>Welcome to CryptoView</h2>
                </div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    checkType(searchFor);
                }} id="search">

                    <div className="search">
                        <input
                            type="text"
                            className="searchFor"
                            placeholder="Enter a transaction hash to check all transactions"
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