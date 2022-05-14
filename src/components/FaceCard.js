import React from "react";
import turnArrow from "../assets/images/turn-arrow.svg";

export default function FaceCard( { front, back, showStateCard } ) {
    const [ sideCard, setSideCard ] = React.useState("front");
    let content;

    function showBack() {
        setSideCard("back")
    }

    if(sideCard === "front") {
        content = (
            <>
                <span> { front } </span>
                <img src={ turnArrow } alt="seta-virar" />
            </>
        );
    } else {
        content = (
            <>
                <span> { back } </span>
                <div className="buttons">
                    <button onClick={ () => showStateCard("wrong") } className="red">Não lembrei</button>
                    <button onClick={ () => showStateCard("almost-right") } className="yellow">Quase não lembrei</button>
                    <button onClick={ () => showStateCard("right") } className="green">Zap!</button>
                </div>
            </>
        );
    }

    return (
        <li className= { sideCard } onClick={ showBack }>
            { content }
        </li>
    );
}