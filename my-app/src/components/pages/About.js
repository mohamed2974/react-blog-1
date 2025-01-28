import InfosSec from "../content/InfosSec";
import ProjectsSec from "../content/ProjectsSec";
import SubHeroSec from "../content/SubHeroSec";
import ToolsSec from "../content/ToolsSec";

export default function About(){
    return(
        <>
            <SubHeroSec titel="Ein kleiner Einblick" description="Wer ich bin und was ich mache – erfährst du auf dieser Seite." />
            <InfosSec towButtons={false}/>
            <ToolsSec />
            <ProjectsSec />
        </>
    )
}



//// ### 1. **Meine Philosophie als Entwickler**  
//// Teile deine Grundsätze oder deinen Ansatz zur Softwareentwicklung. Zum Beispiel:  
//// „Ich glaube an sauberen Code und nachhaltige Lösungen, die langfristig funktionieren. Meine Projekte konzentrieren sich darauf, sowohl Benutzerfreundlichkeit als auch Performance zu gewährleisten.“

//* ### 2. **Warum ich entwickle**  
//* Warum hast du dich für die Programmierung entschieden? Das könnte Besuchern helfen, dich besser zu verstehen:  
//* „Ich entwickle, weil ich es liebe, Probleme zu lösen und Menschen mit meinen Lösungen zu helfen. Jedes Projekt ist für mich eine neue Herausforderung, die mich wachsen lässt.“

//* ### 6. **Interessen & Hobbys**  
//* Ein bisschen persönliche Note macht den Abschnitt noch zugänglicher und zeigt, wer du hinter der Technologie bist:  
//* „Abseits der Tastatur genieße ich es, in der Natur zu sein, zu reisen und neue Kulturen zu entdecken. Außerdem interessiere ich mich für künstliche Intelligenz und deren Anwendung in der Softwareentwicklung.“

//* ### 9. **Empfehlungen und Feedback**  
//* Falls du Empfehlungen oder Feedback von anderen (Kunden, Kollegen) hast, kannst du kurze Zitate oder Links zu deren Bewertungen einfügen:  
//* „„Die Zusammenarbeit mit [dein Name] war hervorragend! Seine Lösungen haben unsere Erwartungen übertroffen.“ – [Kundenname]“


//? ### 5. **Meine Vision für die Zukunft**  
//? Wenn du konkrete Ziele hast, könntest du auch darauf eingehen:  
//? „Mein Ziel ist es, innovative Lösungen für nachhaltige und zukunftsfähige Webanwendungen zu entwickeln, die die digitale Landschaft verändern.“

//? ### 7. **Kollaborationen & Partnerschaften**  
//? Falls du schon mit anderen Entwicklern, Designern oder Firmen zusammengearbeitet hast, kannst du dies ebenfalls erwähnen:  
//? „Ich arbeite gerne in kollaborativen Teams und habe bereits erfolgreich mit Designern, anderen Entwicklern und Unternehmen zusammengearbeitet, um maßgeschneiderte Lösungen zu entwickeln.“
