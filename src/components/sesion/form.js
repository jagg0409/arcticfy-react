import './sesion.css'

const Formulario = (props) =>{
    function handleSubmit(event) {
        event.preventDefault();
    }
    function redirec() {
    window.location.assign('/')
}
    return(
    <form id="card" onsubmit={redirec}>
            <p class="singup">{props.children} </p>
            <div class="inputBox1">
                <input type="text" required="required" id="email" name="email"/>
                <span className="user">Email</span>
            </div>
    
    
            <div className="inputBox">
                <input type="password" required="required" id="pass" name="password"/>
                <span>password</span>
            </div>
    
            <input type="submit" class="enter" value="enviar" onClick={handleSubmit}/>
        </form>
    )
}
export default Formulario