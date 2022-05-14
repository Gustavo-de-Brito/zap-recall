export default function InitialMenu({ logo }) {
    return (
        <div className="initial-menu invisible">
            <img src={ logo } alt="logo-zaprecall" />
            <h1>ZapRecall</h1>
            <button>Iniciar Recall!</button>
        </div>
    );
}