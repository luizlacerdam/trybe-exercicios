import React from "react";
function SelectAll(params) {
    return(
        <div className="select-all">
            <button id="all-read" type="button">Mark all as read</button>
            <button id="all-unread" type="button">Mark all as unread</button>
        </div>
    )
}

export default SelectAll;