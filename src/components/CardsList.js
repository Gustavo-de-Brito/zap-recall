import React from "react";
import Card from "./Card";

export default function CardsList({ cardsContent, iconsList, setIconsList }) {
    function shuffle() {
        return Math.random() - 0.5;
    }

    const shuffledCards = cardsContent.sort(shuffle);

    return (
        <ul className="cards">
            {
            shuffledCards.map( ( cardContent, index ) => 
                <Card 
                    key={index}
                    front={ cardContent.front } 
                    back={ cardContent.back } 
                    questionNum={ index + 1 }
                    iconsList={ iconsList }
                    setIconsList={ setIconsList }
                /> ) 
            }
        </ul>
    );
}