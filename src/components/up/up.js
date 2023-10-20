import './up.css'
import line from "../img/line.ico"
import arc from "../img/arc_64.png"
import monk from "../img/monk_64.png"
import { Link } from 'react-router-dom'

const Up = () => {
    return (
        <div id="up">
            <Link to="/login"><img src={line} id="line" /> log in</Link>
            <Link to="/sesion"><button> sign up</button> </Link>

            <div id="arctic">
                <img src={arc} alt="" /><img src={monk} alt="" />
            </div>

        </div>
    )
}
export default Up