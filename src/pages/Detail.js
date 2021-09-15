import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Counter from "../components/Counter/Counter";
import Body from "../components/Body/Body";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";

function Detail() {
    const[page,setPage] = useState("");
    useEffect(()=>{
        setPage("detail");
    },[])
    return (
        <>
            <div>this is {page} page</div>
            <Header />
            <Body page={page}/>
            <Footer/>
            <button>
                <Link to="/">go to main</Link>
            </button>
        </>
    );
}

export default Detail;