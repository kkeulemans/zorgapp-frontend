import zorgapp from "../../assets/zorgapp.png";
import './HomePage.css'
import Buttons from "../../components/Buttons/Buttons";
import jwt_decode from "jwt-decode";

function HomePage() {

    return (
        <>
            <section>

                <img id="logo" src={zorgapp} alt="ZorgApp logo"/>

                <div className="links">
                    <Buttons text="Login" path="/login" type="button"/>
                    <Buttons text="Registreer" path="/register" type="button"/>
                </div>
            </section>
        </>
    )
}

export default HomePage