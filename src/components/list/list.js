// import list from "../../data"
import React from 'react'
import ListItems from "../listItems/ListItems"




export default function List({ inputItem, addToCompleted }) {
    return (
        <>
            <h3>To Do Items:</h3>

            <ul>
                {
                    inputItem.map((item, idx) => {
                        <ListItems key={idx} content={item.title} addToCompleted={addToCompleted} />
                    })
                }
            </ul>


        </>
    )
}