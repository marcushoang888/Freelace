import Header from "../../../Components/Header";
import LocationBar from "../../../Components/LocationBar";
import Container from "../../../Util/Container";
import AdvantageBody from "../components/AdvantageBody";


export default function OurAdvantage() {
    return (
        <div>
            <Header imgUrl={'/advantage0.webp'}/>
            <LocationBar title={"About Us"} location={"Our Advantage"}/>
            <Container>
                <AdvantageBody/>
            </Container>
        </div>
    )
}
