import Header from "../../../Components/Header";
import LocationBar from "../../../Components/LocationBar";


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
