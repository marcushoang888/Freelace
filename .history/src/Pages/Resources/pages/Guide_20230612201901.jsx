import Header from "../../../Components/Header";


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
