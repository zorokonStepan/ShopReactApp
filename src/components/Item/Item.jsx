import React from "react";
import './Item.css';

export const Item = (props) => {
    return (
        <div className='item'>
            <img src={`./img/${props.item.image}`} alt={props.item.title}/>
            <h2>{props.item.title}</h2>
            <p> {props.item.desc}</p>
            <b> {props.item.price}₽</b>
            <div className='add-to-card'>+</div>
        </div>
    )
}