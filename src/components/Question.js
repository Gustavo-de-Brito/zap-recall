export default function Question({ questionNum, showQuestion, cardState, iconType }) {
    return (
        <li className={ `question ${ cardState }` } onClick={ showQuestion }>
            <span>Pergunta { questionNum }</span> <ion-icon name={ iconType } ></ion-icon>
        </li>
    )
}