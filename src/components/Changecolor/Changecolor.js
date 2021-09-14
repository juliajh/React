import React from "react";

function Changecolor() {
    return (
        <>
            <div className="Changecolor" id="Changecolor">HI</div>
            <button
                onClick={()=>{
                    document.getElementById('Changecolor').style.color= "#FF0000";
                }}
            >
                    ChangeColor

            </button>
        </>
    )
}

export default Changecolor;
