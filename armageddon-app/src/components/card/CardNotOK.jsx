import "./Card.css"
import logo from './meteor.jpg';
export const CardNotOK = () => {
    return <div className={"container"}>
        <div className={"CardNotOK"}>
            <div><img  /> </div>
            <div><h2><u>Название</u></h2>Дата: .......xx/xxx/xxxx<br/>Расстояние: .....xxxxxxx м<br/>Размер: ...............xxx м</div>
            <div className={"rating"}>Оценка:<br/><b>опасен</b><input type={"button"} className={"button-21"} value={"На уничтожение"}/></div>
        </div>
    </div>
}
