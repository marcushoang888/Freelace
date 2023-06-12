import Header from '../../components/common/Header'
import Container from '../../components/common/Container'
import LocationBar from '../../components/common/LocationBar'
import StoryBody from '../../components/AboutUs/StoryBody'
import History from '../../components/AboutUs/History'

export default function OurStory() {
    return (
        <div>
            <Header imgUrl={'/story.webp'}/>
            <LocationBar title={"About Us"} location={"Our Story"}/>
            <Container>
                <StoryBody/>
                <div className='bg-[#f8f8f8] pt-[50px] px-[30px]'>
                    <History/>
                </div>
                {/* <CompanyShow/> */}
            </Container>
        </div>
    )
}
