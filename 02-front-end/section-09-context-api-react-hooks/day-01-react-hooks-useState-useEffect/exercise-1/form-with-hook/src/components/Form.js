import React, { useState } from "react";

function Form() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');
    

    return(
        <form>
            <label htmlFor="name">
                Full Name
                <input value={name} onChange={({target}) => setName(target.value)} id="name" type="text" />
            </label>
            <br />
            <label htmlFor="age">
                Age
                <input value={age} onChange={({target}) => setAge(target.value)} id="age" type="number" />
            </label>
            <br />
            <label htmlFor="city">
                City
                <input value={city} onChange={({target}) => setCity(target.value)} id="city" type="text" />
            </label>
            <button type="button">Send</button>
        </form>
    )
}

export default Form;