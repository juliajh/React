import React from "react";

function Length() {
    return (
        <>
            <div className="word">
                <input type="text" id="word"></input>
            </div>
                <button
                    onClick={()=>{
                        var word=document.getElementById('word').value;
                        document.write(word.length);
                        
                    }}
                >
                        Length

                </button>
        </>
    )
}

export default Length;
