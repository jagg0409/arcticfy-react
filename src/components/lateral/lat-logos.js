import home from '../img/home_64.png'
import lupa from '../img/search_64.png'
import poster from '../img/random.ico'
import mas from '../img/plus.ico'
import like from '../img/like_64.png'
import am from '../img/am.ico'
import { Link } from 'react-router-dom'


const Logoslat = () =>{
    return(
        <div>
            <div className='logo'><img src={am} /> Arcticfy</div>
        <Link to='/'>
            <div className='logos'> <img src={home} />home</div>
        </Link>
        <Link to='/buscar'>
            <div className='logos'> <img src={lupa} />search</div>
        </Link>
        <Link to='/posters'>
            <div className='logos'> <img src={poster} />posters</div>
        </Link>

        <br/><br/>
        <Link to='/playlist'>
            <div className='logos'> <img src={mas} /> playlist</div>
        </Link>
        <Link to='/likes'>
            <div className='logos'> <img src={like}/>likes</div>
        </Link>
        </div>
    )
}

export default Logoslat