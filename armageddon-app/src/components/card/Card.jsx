import "./Card.css"
import {CardImage} from "./cardImage/CardImage";
import {CardAction} from "./cardAction/CardAction";
import {CardContent} from "./cardContent/CardContent";
export const Card = (props) => {
    const {name,date,distance,size,isDangerous,displayTip}=props;
    return <div className={"container"}>
        <div className={`${isDangerous ? `CardNotOK` : `CardOK`}`}><div className={`card-${sizeType(size)}`}>
            <CardImage/>
            <CardContent name={name} date={date} distance={distance} size={size} displayTip={displayTip}/>
            <CardAction isDangerous={isDangerous}/>
        </div></div>
    </div>
}
const sizeType = (s) => {
    if (s>700)
        return 3
    else if (s>300)
        return 2
    else
        return 1
}
