import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";

function Main() {
    const[page,setPage] = useState("");
    useEffect(()=>{
        setPage("main");
    },[])
    return (
        <>
            <div>this is {page}</div>
            <Header/>
            <Footer/>
            <button>
                <Link to="/detail">go to detail</Link>
            </button>
        </>
    );
}

export default Main;