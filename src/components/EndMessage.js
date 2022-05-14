export default function EndMessage({ iconsList }) {
    const containsWrong = iconsList.includes("close-circle-sharp");
    let message;

    if(containsWrong) {
        message = (
            <>
                <h3>&#128549; Putz...</h3>
                <p>Ainda faltam alguns... Mas não desanime!</p>
            </>
        );
    } else {
        message = (
            <>
                <h3>&#129395; Parabéns!</h3>
                <p>Você não esqueceu de nenhum flashcard!</p>
            </>
        );
    }

    return (
        <div className="end-message">
            { message }
        </div>
    );
}