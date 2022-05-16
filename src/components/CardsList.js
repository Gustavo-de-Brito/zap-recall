import React from "react";
import Card from "./Card";

export default function CardsList({ shuffledCards, iconsList, setIconsList }) {

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