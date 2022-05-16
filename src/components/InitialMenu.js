export default function InitialMenu({ logo, changeView }) {
    return (
        <div className="initial-menu">
            <img src={ logo } alt="logo-zaprecall" />
            <h1>ZapRecall</h1>
            <button onClick={ changeView }>Iniciar Recall!</button>
        </div>
    );
}