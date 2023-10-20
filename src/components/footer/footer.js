import './footer.css'
import iglogo from "../img/ig_64.png"
import arc from "../img/arc_64.png"
import monk from "../img/monk_64.png"

const Footer = () =>{
    return(
        <div id="footer">
            <div id="log"><img src={arc} id="lo"/> <img src={monk} id="lo"/>Arcticfy</div>

            <section id="social">
                <h4>our social media</h4>
                <br/> <br/> <a href="https://es-la.facebook.com/" id="fa">Facebook</a>
                <br/> <br/> <a href="https://co.pinterest.com/" id="pi"> Pinterest</a>
                <br/> <br/><a href="https://www.instagram.com/" id="ig"> Instagram</a>
                <br/> <br/><a href="https://twitter.com/" id="tw">Twitter </a> <br/>
            </section>
            
            <section id="contacto">
                <h4>customer service</h4>
                <br/><br/> +57 3503627710
                <br/><br/> <a href="https://www.google.com/gmail/about/" id="fa">Jg2nano@gmail.com</a>
            </section>

            <div id="creadores">
                <h4>developers</h4>
                <br/><br/> Juan Garcia

            </div>
            <div id="lred">
                <a href="https://www.instagram.com/jagg0.0/">
                    <p id="igs"></p><img src={iglogo} id="iglogo"/>
                </a>

            </div>
        </div>
    )
}
export default Footer