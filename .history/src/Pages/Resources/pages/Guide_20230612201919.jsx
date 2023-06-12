import Header from "../../../Components/Header";
import LocationBar from "../../../Components/LocationBar";
import Container from "../../../Util/Container";


export default function Guide() {
    return (
        <div>
            <Header imgUrl={'/guide.webp'}/>
            <LocationBar title={"Resource"} location={"Guide"}/>
            <Container bgColor={'[#f8f8f8]'}>
                <Title text={"Guide Download"}/>
                <GuideBody/>
            </Container>
        </div>
    )
}
