export default function IconsList({ iconsList }) {
    const iconsJsx = [];

    for(let i = 0; i < iconsList.length; i++) {
        let color = "";

        if(iconsList[i] === "close-circle-sharp") {
            color = "#FF3030";
        } else if(iconsList[i] === "help-circle-sharp") {
            color = "#FF922E";
        } else {
            color = "#2FBE34";
        }

        iconsJsx.push(
            <ion-icon key={ i } style={ {color: color} } name={ iconsList[i] }></ion-icon>
        );
    }

    return (
        <div className="icons">
            { iconsJsx }
        </div>
    );
}