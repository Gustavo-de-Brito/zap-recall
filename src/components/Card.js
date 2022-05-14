import React from "react";
import Question from "./Question";
import FaceCard from "./FaceCard";

export default function Card({ front, back, questionNum, iconsList, setIconsList }) {
    const [ question, setQuestion ] = React.useState( false );
    const [ cardState, setCardState ] = React.useState( "" );
    const [ iconType, setIconType ] = React.useState( "play-outline" );

    function showQuestion() {
        setQuestion( !question );
    }

    function showStateCard(state) {
        if(state === "wrong") {
            setIconType("close-circle-sharp");
            setIconsList( [...iconsList, "close-circle-sharp"] );
        } else if(state === "almost-right") {
            setIconType("help-circle-sharp");
            setIconsList( [...iconsList, "help-circle-sharp"] );
        } else {
            setIconType("checkmark-circle-sharp");
            setIconsList( [...iconsList, "checkmark-circle-sharp"] );
        }

        setCardState(state);
        showQuestion();
    }

    return (
        <>
            {
                question 
                ? 
                <FaceCard front={ front } back={back} showStateCard={ showStateCard } /> 
                : 
                <Question questionNum={ questionNum } showQuestion={ showQuestion } cardState={ cardState } iconType={ iconType } />
            }
        </>
    );
}