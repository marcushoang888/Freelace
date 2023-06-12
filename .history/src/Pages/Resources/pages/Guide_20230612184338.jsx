import React from 'react'
import Header from '../../components/common/Header'
import Container from '../../components/common/Container'
import LocationBar from '../../components/common/LocationBar'
import Title from '../../components/Resources/Title'
import GuideBody from '../../components/Resources/GuideBody'

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
