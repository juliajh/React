import React from "react";

function Changesize() {
    return (
        <>
            <div className="Changesize" id="Changesize">HI</div>
            <button
                onClick={()=>{
                    document.getElementById('Changesize').style.fontSize= "30px";
                }}
            >
                    ChangeSize

            </button>
        </>
    )
}

export default Changesize;
