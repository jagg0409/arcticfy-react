import { Link } from 'react-router-dom'
import './albums.css'
import Portada from './portada'


const Albums = (props) => {
    return (
            <article id="albums">
                
                    <h2>{props.children}</h2>
                    
                
                <nav id="portadas">
                    <Portada name={`${props.name}`} des={`${props.des}`}></Portada>
                    <Portada name={`${props.name2}`} des={`${props.des2}`}></Portada>
                    <Portada name={`${props.name3}`} des={`${props.des3}`}></Portada>                    
                </nav>
            </article>
            
    )
}
export default Albums