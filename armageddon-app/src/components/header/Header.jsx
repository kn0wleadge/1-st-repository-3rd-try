import {Link} from "react-router-dom"
import styles from "./Header.module.css"
export const Header  = ()=>{
    return <div>
        <div className ={styles.container}>
            <div><h1>ARMAGGEDON V </h1> Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле </div>

            <div>

                <Link to={"/asteroids"}>Астероиды</Link>
                <Link to={"/destroyments"}>Уничтожение</Link>
            </div>
        </div>
        <hr>

        </hr>
        <div className={styles.Check}><input  type = {"checkbox"} />Показывать торлько опАсные</div>
    </div>

}
