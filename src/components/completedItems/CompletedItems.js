import React from "react";


export default function Completed(props) {
    return (
        <>
            <h3>Completed Items:</h3>

          
                <ul>
                    {
                        props.completedItem.map((item) => {
                        return (
                    <li>
                        {item}
                    </li>

                    )
                    })
                }
                </ul>


          


        </>
    )
}