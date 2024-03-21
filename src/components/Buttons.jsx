import React from "react";
import './Buttons.css'

function Buttons(props){
    const signs0 = [`C`, `%`, `<=`, `/`];
    const signs1 = [`7`, `8`, `9`, `*`];
    const signs2 = [`4`, `5`, `6`, `-`];
    const signs3 = [`1`, `2`, `3`, `+`];
    const signs4 = [`00`, `0`, `.`, `=`];
    return (
        <div id="buttonPanel">
        <div className="row">
            {
                signs0.map((items) => {
                    return <button value={items} onClick={props.handleClick}>{items}</button>
                })
            }
        </div>
        <div className="row">
            {
                signs1.map((items) => {
                    return <button value={items} onClick={props.handleClick}>{items}</button>
                })
            }
        </div>
        <div className="row">
            {
                signs2.map((items) => {
                    return <button value={items} onClick={props.handleClick}>{items}</button>
                })
            }
        </div>
        <div className="row">
            {
                signs3.map((items) => {
                    return <button value={items} onClick={props.handleClick}>{items}</button>
                })
            }
        </div>
        <div className="row">
            {
                signs4.map((items) => {
                    return <button value={items} onClick={props.handleClick}>{items}</button>
                })
            }
        </div>
        </div>
    )
}

export default Buttons