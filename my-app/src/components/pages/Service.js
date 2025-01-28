import ServicesSec from "../content/ServicesSec";
import SubHeroSec from "../content/SubHeroSec";
import ToolsSec from "../content/ToolsSec";

export default function Service(){
    return(
        <>
            <SubHeroSec titel="Was ich anbiete" description="Entdecke meine Services – individuell, kreativ und professionell." />
            <ServicesSec />
            <ToolsSec />
        </>
    )
}