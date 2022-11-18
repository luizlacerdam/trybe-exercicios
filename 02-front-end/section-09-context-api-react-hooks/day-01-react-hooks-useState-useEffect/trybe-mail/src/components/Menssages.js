import React from "react";
import messagesList from "../data/messagesList";
function Menssages() {
    return (
        <div>
            {messagesList.map((mens) => (
                <div>{mens.title} 
                <button id="read" type="button">read</button>
                <button id="unread" type="button">unread</button>
                </div>
            ))}
        </div>
    )
}

export default Menssages;