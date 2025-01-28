import ContactSec from "../components/content/ContactSec";
import Newsletter from "../components/content/NewsletterSec";
import SubHeroSec from "../components/content/SubHeroSec";

export default function Contact(){
    return(
        <>
        <SubHeroSec titel="Lass uns sprechen" description="Egal, ob du eine Idee teilen möchtest oder Unterstützung suchst – ich bin für dich da." />
            <ContactSec />
            <Newsletter />
        </>
    )
}