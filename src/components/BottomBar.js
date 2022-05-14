import IconsList from "./IconsList";

export default function BottomBar({ qtdCards, iconsList }) {
    return (
        <div className="bottom-bar">
            <h3>{ `${ iconsList.length }/${ qtdCards }` } Concluídos</h3>
            <IconsList iconsList={ iconsList }/>
        </div>
    );
}