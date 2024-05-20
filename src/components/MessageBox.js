import React from "react";
import "../styles/MessageBox.css";
function MessageBox({onClose})
{   
return(
    <div className="message_box">
        <p>Successfully Ordered!</p>
        <button onClick={onClose}>Close</button>
    </div>
)
}

export default MessageBox;