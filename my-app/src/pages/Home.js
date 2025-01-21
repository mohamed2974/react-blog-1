import ServicesSec from "../components/sections/ServicesSec"
import Newsletter from "../components/sections/NewsletterSec"
import HeroSec from "../components/sections/HeroSec"
import InfosSec from "../components/sections/InfosSec"
import ToolsSec from "../components/sections/ToolsSec"
import ProjectsSec from "../components/sections/ProjectsSec"
import ContactSec from "../components/sections/ContactSec"

export default function Home(){
    return(
        <div className="container">
            <HeroSec />
            <InfosSec />
            <ToolsSec />
            <Newsletter />
            <ServicesSec />
            <ProjectsSec />
            <ContactSec />
        </div>
    )
}