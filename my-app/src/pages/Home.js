import ServicesSec from "../components/ServicesSec"
import Newsletter from "../components/NewsletterSec"
import HeroSec from "../components/HeroSec"
import InfosSec from "../components/InfosSec"

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