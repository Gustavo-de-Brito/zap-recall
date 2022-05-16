import React from "react";
import "../assets/styles/reset.css";
import "../assets/styles/styles.css";
import logo from "../assets/images/logo.png";
import InitialMenu from "./InitialMenu";
import CardsView from "./CardsView";

export default function App() {
    const [ showMenu, setShowMenu ] = React.useState(true);

    function changeView() {
        setShowMenu(false);
    }

    return (
        <>
            { showMenu ? <InitialMenu changeView={changeView} logo={ logo } /> : <CardsView logo={ logo } /> }
        </>
    );
}