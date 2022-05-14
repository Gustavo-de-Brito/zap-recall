import React from "react";
import Card from "./Card";

export default function CardsList({ cardsContent, iconsList, setIconsList }) {
    return (
        <ul className="cards">
            {
            cardsContent.map( ( cardContent, index ) => 
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