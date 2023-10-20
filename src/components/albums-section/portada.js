import { Link } from "react-router-dom"
import play from "../img/play_64.png"
import './portada.css'
const albumImg = require.context('../img', true)


const Portada = (props) =>{
    return(
        <section id="portada">
        <Link to={`/${props.name}`}>
            <span id="anima">
                <img src={play} alt="" />
            </span>
            <img src={albumImg(`./${props.name}.jpg`)} alt="" />
            <h3>{props.name}</h3>
            <p>{props.des} </p>
        </Link>
    </section>
    )
}
export default Portada