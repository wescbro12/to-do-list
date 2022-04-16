
import React from "react"
import './App.css'
import data from "../../data"
import Header from "../../components/header/Header";
import InputField from "../../components/input/Input";
import List from "../../components/list/List";
import Completed from "../../components/completedItems/CompletedItems";
import { useState, useEffect } from "react";

export default function App(props) {
    const [ inputItem, setInputItem ] = useState(data)
    const [ completedItem, setCompletedItem ] = useState([])

    const addToCompleted = (items) => {
        const completedItems = [items, ...completedItem]
        setCompletedItem(completedItems)
    }

    const handleSubmit = (item) => {
        setInputItem([{ title: item }, ...inputItem
        ])
    }
    return (
        <>
            <Header />
            <InputField handleSubmit={handleSubmit} />
            <List inputItem={inputItem} addToCompleted={ addToCompleted}/>    
            <Completed completedItem={ completedItem}/>
        </>

    )
}