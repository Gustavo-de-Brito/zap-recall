import TopLogo from "./TopoLogo";
import CardsList from "./CardsList";

export default function CardsView({ logo }) {
    return (
        <div className="cards-view">
            <TopLogo logo={logo }/>
            <CardsList />
        </div>
    );
}