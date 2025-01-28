import ContactSec from "../content/ContactSec";
import Newsletter from "../content/NewsletterSec";
import SubHeroSec from "../content/SubHeroSec";

export default function Contact(){
    return(
        <>
        <SubHeroSec titel="Lass uns sprechen" description="Egal, ob du eine Idee teilen möchtest oder Unterstützung suchst – ich bin für dich da." />
            <ContactSec />
            <Newsletter />
        </>
    )
}