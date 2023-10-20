import { Link } from "react-router-dom"

const  Latfoot = () =>{
    return(
    <div className='footlat'> 
         <Link to="/legal"> legal</Link>   
            <Link to="/privacidad">privacy </Link>
            <Link to="cookies">cookies</Link>
        </div>
    )
}

export default Latfoot