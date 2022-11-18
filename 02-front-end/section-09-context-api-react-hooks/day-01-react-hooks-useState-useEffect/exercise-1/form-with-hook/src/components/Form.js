import React from "react";

function Form() {
    return(
        <form>
            <label htmlFor="name">
                Full Name
                <input id="name" type="text" />
            </label>
            <br />
            <label htmlFor="age">
                Age
                <input id="age" type="number" />
            </label>
            <br />
            <label htmlFor="city">
                City
                <input id="city" type="text" />
            </label>
            <label htmlFor="fund">
                Fund
                <input type="radio" name="" id="fund" />
            </label>
            <label htmlFor="FrontEnd">
                FrontEnd
                <input type="radio" name="" id="FrontEnd" />
            </label>
            <label htmlFor="BackEnd">
                BackEnd
                <input type="radio" name="" id="BackEnd" />
            </label>
            <label htmlFor="SC">
                SC
                <input type="radio" name="" id="SC" />
            </label>
            <button type="button">Send</button>
        </form>
    )
}

export default Form;