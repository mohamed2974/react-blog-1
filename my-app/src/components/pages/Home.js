import ServicesSec from "../content/ServicesSec"
import Newsletter from "../content/NewsletterSec"
import HeroSec from "../content/HeroSec"
import InfosSec from "../content/InfosSec"
import ToolsSec from "../content/ToolsSec"
import ProjectsSec from "../content/ProjectsSec"
import ContactSec from "../content/ContactSec"

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
            <ServicesSec />
            <ProjectsSec />
            <Newsletter />
        </>
    )
}