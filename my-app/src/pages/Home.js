import ServicesSec from "../components/sections/ServicesSec"
import Newsletter from "../components/sections/NewsletterSec"
import HeroSec from "../components/sections/HeroSec"
import InfosSec from "../components/sections/InfosSec"

export default function Home(){
    return(
        <div className="container">
            <HeroSec />
            <InfosSec />
            <Newsletter />
            <ServicesSec />
        </div>
    )
}