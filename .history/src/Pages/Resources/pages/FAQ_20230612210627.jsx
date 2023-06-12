import Header from "../../../Components/Header";
import LocationBar from "../../../Components/LocationBar";
import Container from "../../../Util/Container";
import FaqBody from "../components/FaqBody";
import Title from "../components/Title";


export default function FAQ() {
    return (
        <div>
            <LocationBar title={"Resources"} location={"FAQ"}/>
            <Container bgColor={'[#f8f8f8]'}>
                <Title text={"FAQ"}/>
                <div className='mb-[88px] mt-4'>
                    <FaqBody question={"How about the qualification?"} answer={"All the production lines including the subsidiaries of Sinder have the GMP certificate. Shandong Sinder Technology Co., Ltd has the ISO 9001, 14001, 45001 certificates. Shandong Sinder Animal Vaccine Co., Ltd has 2 CNAS LABs with ISO17025 Certificate. 24 New Veterinary Drug Certificates in China, 76 authorized invention patents."}/>
                    <FaqBody question={"How can I buy these products?"} answer={"It has to be determined according to the relevant regulations and restrictions of the agriculture or veterinary department of your country, the product will be delivered by air way or sea way after registration. No worries, Sinder will support all the documents to register the product in your country and we already registered in Pakistan, Iran, Vietnam, Egypt, Nigeria, Burma, etc."}/>
                    <FaqBody question={"What if I encounter a technical problem?"} answer={"We provide after sale-service and technical support in English, Japanese and Urdu by online meeting, solution videos and field trip."}/>
                </div>
            </Container>
        </div>
    
    )
}
