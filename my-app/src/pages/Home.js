import ServicesSec from "../components/content/ServicesSec"
import Newsletter from "../components/content/NewsletterSec"
import HeroSec from "../components/content/HeroSec"
import InfosSec from "../components/content/InfosSec"
import ToolsSec from "../components/content/ToolsSec"
import ProjectsSec from "../components/content/ProjectsSec"
import ContactSec from "../components/content/ContactSec"

import { Capacitor } from '@capacitor/core';



export default function Home(){
    const isMobileApp = Capacitor.isNativePlatform()

    //mobile ######################### HOME MOBILE ######################### //
    if (isMobileApp){
        return (
            <>
            <InfosSec />
            <ToolsSec />
            <ServicesSec />
            <ProjectsSec />
            <Newsletter />
            <ContactSec />
        </>
        )
    }

    //* ######################### HOME WEB ######################### //
    return(
        <>
            <HeroSec />
            <InfosSec />
            <ToolsSec />
            <ServicesSec />
            <ProjectsSec />
            <Newsletter />
            <ContactSec />
        </>
    )
}