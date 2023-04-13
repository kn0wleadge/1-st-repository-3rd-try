import "./Card.css"
export const CardOK = () => {
    return <div className={"container"}>
        <div className={"CardOK"}>
            <div><img src = "/meteor.jpg" /> </div>
            <div><h2><u>Название</u></h2>Дата: .......xx/xxx/xxxx<br/>Расстояние: .....xxxxxxx м <br/>Размер: ...............xxx м</div>
            <div className={"rating"}>Оценка:<br/><b>не опасен</b><input type={"button"} className={"button-21"} value={"На уничтожение"}/></div>
        </div>
    </div>
}
