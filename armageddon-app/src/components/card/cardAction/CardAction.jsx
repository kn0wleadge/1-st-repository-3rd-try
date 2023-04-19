import "./CardAction.css"

export const CardAction = ({isDangerous}) => {
    return <div className={"mark"}>
        {`Оценка ${isDangerous ? 'опасен' : 'не опасен'}`}
        <input type={"button"} className={"button-21"} value={"На уничтожение"}/>
    </div>
}
