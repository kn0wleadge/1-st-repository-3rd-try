import {Header} from "../components/header/Header";
import "./Asteroids.css"
import {Card} from "../components/card/Card";
import {useState} from "react";
export const Asteroids = () => {
    const [asteroids] = useState(generateAsteroids())

    const [onlyDangerous, setOnlyDangerous]=useState(false)

    const [displayTip,setDisplayTip] = useState(true)

    return <div>
        <div>
            <Header/>
        </div>
        <div className={"cunteiner"}>
            <div>
                <input type={"checkbox"} value={onlyDangerous} name={"onlyDanger"} onChange={()=> setOnlyDangerous(!onlyDangerous)}/><label htmlFor={"onlyDanger"}>Показывать только опасные</label>
            </div>
            <div>
                Расстояние
                <button className={`DistanceChoose${displayTip}`} onClick={()=>{setDisplayTip(true)}}>в километрах</button>,
                <button className={`DistanceChoose${!displayTip}`} onClick={()=>{setDisplayTip(false)}}> расстояних до луны</button>
            </div>
        </div>
        <div>
            {onlyDangerous ?
                asteroids.filter((item)=>item.isDangerous).map((item)=><Card {...item} displayTip={displayTip}/>) : asteroids.map((item)=><Card {...item} displayTip={displayTip}/>)
            }
        </div>
    </div>
}
const generateAsteroids = ()=>{
    const months = [
        `января`,
        `февраля`,
        `марта`,
        `апреля`,
        `мая`,
        `июня`,
        `июля`,
        `августа`,
        `сентября`,
        `октября`,
        `ноября`,
        `декабря`,];
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const result =[];

    for (let i=0; i<10; i++) {
        const name = characters[(Math.random()*25).toFixed(0)]+characters[(Math.random()*25).toFixed(0)]+characters[(Math.random()*25).toFixed(0)]+characters[(Math.random()*25).toFixed(0)]+'-'+characters[(Math.random()*25).toFixed(0)] + characters[(Math.random()*25).toFixed(0)]
        const date = `${(Math.random()*27+1).toFixed(0)} ${months[(Math.random()*11).toFixed(0)]} 2023`
        const size = (Math.random()*1000+10).toFixed(0)
        const distance = (Math.random()*90000000).toFixed(0)
        let isDangerous=false
        if (distance<=19220000)
            isDangerous=true
        result.push({name,date,size,distance,isDangerous})
    }
    return result
}
