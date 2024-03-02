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