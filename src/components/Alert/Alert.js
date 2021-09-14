import React from "react";

function Alert() {
    return (
        <>
            <br></br>
            <input type="radio" name="fruit" value="peach"/>복숭아
            <input type="radio" name="fruit" value="apple"/>사과
            <button
                onClick={()=>{
                    var obj_length = document.getElementsByName("fruit").length;
                    for (var i=0; i<obj_length; i++) {
                        if (document.getElementsByName("fruit")[i].checked == true) {
                            alert(document.getElementsByName("fruit")[i].value);
                        }
                    }
                }}
            >
                    Alert

            </button>
        </>
    )
}

export default Alert;
