import Header from "../../../Components/Header";
import LocationBar from "../../../Components/LocationBar";
import Address from "../../../Util/Address";
import Container from "../../../Util/Container";
import History from "../components/History";
import StoryBody from "../components/StoryBody";

export default function OurStory() {
    return (
        <div>
            <Header imgUrl={'/story.webp'}/>
            <LocationBar title={"About Us"} location={"Our Story"}/>
            <Address/>
            <Container>
                <StoryBody/>
                <div className='bg-[#f8f8f8] pt-[50px] px-[30px]'>
                    <History/>
                </div>
            </Container>
        </div>
    )
}
