import React from "react";
import Card from "./Card";

const cardsContent = [
    {
        front: "O que é JSX?",
        back: "Uma extensão de linguagem do JavaScript"
    },
    {
        front: " O React é __",
        back: "Uma biblioteca JavaScript para construção de interfaces"
    },
    {
        front: "Componentes devem iniciar com __",
        back: "Letra maiúscula"
    },
    {
        front: "Podemos colocar __ dentro do JSX",
        back: "Expressões"
    },
    {
        front: "O ReactDOM nos ajuda __",
        back: "Interagindo com a DOM para colocar componentes React na mesma"
    },
    {
        front: "Usamos o npm para __",
        back: "Gerenciar os pacotes necessários e suas dependências"
    },
    {
        front: "Usamos props para __",
        back: "Passar diferentes informações para componentes"
    },
    {
        front: "Usamos estado (state) para __",
        back: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    },
];

export default function CardsList() {
    return (
        <ul className="cards">
            {
            cardsContent.map( ( cardContent, index ) => 
                <Card 
                    key={index}
                    front={ cardContent.front } 
                    back={ cardContent.back } 
                    questionNum={ index + 1 }
                /> ) 
            }
        </ul>
    );
}