import Header from "../../../Components/Header";


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
