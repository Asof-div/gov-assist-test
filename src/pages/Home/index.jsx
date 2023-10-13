import React, { useEffect } from 'react'
import PageMainContainer from '../../common/PageMain/PageMain'
import HeroSection from './component/HeroSection'
import HowItWorks from './component/HowItWorks'
import Footer from '../../layouts/components/Footer'
import TrustPilotSection from './component/TrustPilotSection'


const Page = () => {
    return (
        <PageMainContainer title='Home' description='Home'>
            <HeroSection />
            <HowItWorks />
            <TrustPilotSection />
            <Footer />
        </PageMainContainer>
    )
}

export default Page;
