import React from "react";
import messagesList from "../data/messagesList";
function Menssages() {
    return (
        <div>
            {messagesList.map((mens) => (
                <div>{mens.title}</div>
            ))}
        </div>
    )
}

export default Menssages;