import ServicesSec from "../components/content/ServicesSec";
import SubHeroSec from "../components/content/SubHeroSec";
import ToolsSec from "../components/content/ToolsSec";

export default function Service(){
    return(
        <>
            <SubHeroSec titel="Was ich anbiete" description="Entdecke meine Services – individuell, kreativ und professionell." />
            <ServicesSec />
            <ToolsSec />
        </>
    )
}