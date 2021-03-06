import React from 'react';
import {useState} from 'react'
export default function InputField({handleSubmit}) {
    const [input, setInput] = useState('')
    const handleChange = (evt) => {
        setInput(evt.target.value)
    }

    const handleForm = (evt) => {
        evt.preventDefault();
        handleSubmit(input)
        setInput('')
    }
    return (
        <>
            <p>New Item</p>
            <form onSubmit={({handleForm})}>
                <input className="add" type="text" placeholder="add new task" value={input} onChange={ handleChange}/>
            </form>
       
        </>
    )
}