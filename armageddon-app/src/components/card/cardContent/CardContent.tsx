import "./CardContent.css"
type AsteroidCardProps = {
    name:string;
    date:string;
    distance:number;
    size:number;
    displayTip:boolean
}
export const CardContent =(props:AsteroidCardProps) => {
    const {name,date,distance,size,displayTip}=props;
    return <div className={"info"}>
        <div><h2><u>{name}</u></h2>
        {`Дата: ${date}`}<br/>
        {`Расстояние: ${distanceDisplay(displayTip,distance)}`}<br/>
        {`Размер: ${size} м`}</div>
    </div>
}

const distanceDisplay = (displayTip,distance) => {
    if (displayTip)
        return `${distance} км`
    else
        return `${(distance/384400).toFixed(2)} расстояний до луны`
}
