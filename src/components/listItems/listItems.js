import React from "react"

export default function ListItems(props) {

    return (
        <div>
            <li onClick={() => props.addToCompleted(props.content)}
            ><button>Completed</button>
            </li>

        </div>
    )
}