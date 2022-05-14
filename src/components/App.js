import "../assets/styles/reset.css";
import "../assets/styles/styles.css";
import logo from "../assets/images/logo.png";
import InitialMenu from "./InitialMenu";
import CardsView from "./CardsView";

export default function App() {
    return (
        <>
            <InitialMenu logo={ logo }/>
 
            <CardsView logo={ logo }/>
        </>
    );
}