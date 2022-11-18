import React from "react";
function Menssages({messages}) {
    return (
        <div className="msgs">
            {messages.map((mes) => (
                <div className="msg" key={mes.id}>
                    {mes.title} 
                <div className="read-unread">
                <button id="read" type="button">read</button>
                <button id="unread" type="button">unread</button>
                </div>
                </div>
            ))}
        </div>
    )
}

export default Menssages;