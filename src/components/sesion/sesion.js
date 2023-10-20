import './sesion.css'
import Formulario from './form'
import { Routes, Route} from 'react-router-dom'

const Sesion = () => {

    return(
        <Routes>
<Route exact path='/sesion' element={
        <div class="container" >
        <Formulario>sign up</Formulario>
    </div>
        
    } />
    <Route exact path='/login' element={    
            <div class="container" >
        <Formulario>log in</Formulario>
    </div>
    } />

        </Routes>
        )
}
export default Sesion