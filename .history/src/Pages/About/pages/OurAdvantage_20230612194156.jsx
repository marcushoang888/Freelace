import Header from '../../components/common/Header'
import Container from '../../components/common/Container'
import LocationBar from '../../components/common/LocationBar'
import AdvantageBody from '../../components/AboutUs/AdvantageBody'

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
