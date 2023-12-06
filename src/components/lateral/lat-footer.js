import { Link, Route, Routes } from "react-router-dom"

const  Latfoot = () =>{
    return(
    <div className='footlat'> 
         <Link to="/legal"> legal</Link>   
            <Link to="/legal">privacy </Link>
            <Link to="/legal"> cookies</Link>
        </div>
    )
}

export default Latfoot