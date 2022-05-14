import EndMessage from "./EndMessage";
import IconsList from "./IconsList";

export default function BottomBar({ qtdCards, iconsList }) {
    const qtdIcons = iconsList.length;

    return (
        <div className="bottom-bar">

            { qtdIcons === qtdCards ? <EndMessage iconsList={ iconsList } /> : <></> }

            <h3>{ `${ qtdIcons }/${ qtdCards }` } Concluídos</h3>
            <IconsList iconsList={ iconsList }/>
        </div>
    );
}