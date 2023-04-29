import React from "react";
import './Items.css';
import {Item} from "../Item/Item";

export const Items = (props) => {
    return (
        <main>
            {props.items.map(item => (
                <Item key={item.id} item={item}/>
            ))}
        </main>
    )
}