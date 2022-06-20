import zorgapp from "../../assets/zorgapp.png";
import './HomePage.css'
import Buttons from "../../components/Buttons/Buttons";

function HomePage() {


    return (
        <>
            <section>

                <img id="logo" src={zorgapp} alt="ZorgApp logo"/>

                <div className="links">
                    <Buttons text="Login" path="/login"/>
                    <Buttons text="Registreer" path="/register"/>
                </div>
            </section>
        </>
    )
}

export default HomePage