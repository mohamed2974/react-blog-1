import { useState } from "react";
import { FaCode, FaLightbulb} from "react-icons/fa6";
import { AiOutlineRise } from "react-icons/ai";


const list =[
    {
        titel: 'Warum ich Code schreibe', 
        description: 'Ich schreibe Code, weil es mir ermöglicht, kreative Lösungen zu entwickeln, die echte Probleme lösen. Die Herausforderung, immer neue Technologien zu lernen und anzuwenden, ist das, was mich motiviert.',
        color: 'bg-teal-400',
        hoverEffekt: 'hover:bg-teal-500',
        activEffekt: `bg-teal-500 -translate-y-[20px]`,
        icon: <FaCode className="text-4xl"/>,
    },
    {
        titel: 'Was mich an Technologie begeistert', 
        description: 'Was mich an Technologie begeistert, ist ihre unendliche Vielseitigkeit. Jeden Tag lerne ich neue Wege, wie man mit Code die Welt verändern kann – sei es durch innovative Apps oder durch die Verbesserung bestehender Systeme.',
        color: 'bg-amber-400',
        hoverEffekt: 'hover:bg-amber-500',
        activEffekt: `bg-amber-500 -translate-y-[20px]`,
        icon: <FaLightbulb className="text-4xl"/>,
    },
    {
        titel: 'Wie ich mit Herausforderungen umgehe', 
        description: 'Herausforderungen sind für mich Chancen, mich weiterzuentwickeln. Wenn ich auf ein Problem stoße, gehe ich es mit einer lösungsorientierten Denkweise an und arbeite eng mit meinem Team zusammen, um die beste Lösung zu finden.',
        color: 'bg-sky-400',
        hoverEffekt: 'hover:bg-sky-500',
        activEffekt: `bg-sky-500 -translate-y-[20px]`,
        icon: <AiOutlineRise className="text-4xl"/>,
    },
]

const boxstyle = 'flex justify-center items-center flex-col py-5 px-3 rounded-xl'

export default function PersonalFAQ(){
    const [activeIndex, setactiveIndex] = useState(0)

    const handleClick = (index) => {
        if(index === activeIndex) return
        setactiveIndex(index !== activeIndex && index)
    }
    return(
        <section className="select-none bg-gray-100 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {list.map((item, index) => (
                    <>
                    <button className={`px-6 py-3 transition transform ${boxstyle} ${item.color}  ${activeIndex === index ? item.activEffekt : item.hoverEffekt}`} key={index} onClick={() => handleClick(index)}>
                        <div className="rounded-full lg:w-16 lg:h-16 bg-white text-center relative flex justify-center items-center p-6 mb-1 ">
                            <span>{item.icon}</span>
                        </div>
                    </button>
                    </>
                ))}
            </div>
            <div className="flex justify-center text-center bg-white rounded-lg mt-8">
                {list.map((item, index) => (
                    <>
                    <div key={index} className={`py-8 w-3/4 ${activeIndex === index ? 'block' : 'hidden'}`}>
                        <h3 className="text-3xl font-bold mb-10">{activeIndex === index && item.titel}</h3>
                        <p className="text-xl">{activeIndex === index && item.description}</p>
                    </div>
                    </>
                ))}
            </div>
        </section>
    )
}


//supcom ######################### Box ######################### //



/**
1. „Meine Mission als Entwickler“
Erkläre, was du mit deiner Arbeit erreichen möchtest. Was ist deine langfristige Vision als Entwickler? Möchtest du Probleme lösen, Innovationen vorantreiben oder der Gemeinschaft etwas zurückgeben?
Beispiel: „Meine Mission ist es, innovative Webanwendungen zu erstellen, die nicht nur funktional, sondern auch benutzerfreundlich und nachhaltig sind.“

3. „Mein Weg zum Programmieren“
Beschreibe, wie du den Weg zur Softwareentwicklung gefunden hast, welche Herausforderungen du überwinden musstest und was dich dazu inspiriert hat, diesen Beruf zu ergreifen.
Beispiel: „Mein Weg in die Softwareentwicklung begann, als ich in meiner Freizeit kleine Projekte entwickelte und meine Leidenschaft für Technologie entdeckte. Heute bin ich stolz darauf, professionell als Entwickler zu arbeiten.“

5. „Meine Werte als Entwickler“
Was sind deine ethischen Grundsätze als Entwickler? Welche Prinzipien sind dir wichtig in deiner Arbeit und deinem Umgang mit anderen?
Beispiel: „Integrität, Zusammenarbeit und kontinuierliches Lernen sind für mich die Grundlage für jedes erfolgreiche Projekt. Ich glaube, dass guter Code nicht nur effektiv sein sollte, sondern auch transparent und nachvollziehbar.“

7. „Zukünftige Ziele und Ambitionen“
Erkläre, was du dir für deine Zukunft als Entwickler vornimmst. Welche Technologien möchtest du noch beherrschen? Was sind deine beruflichen Ziele?
Beispiel: „In Zukunft möchte ich mich weiter auf den Bereich Künstliche Intelligenz und maschinelles Lernen spezialisieren, um intelligente Anwendungen zu entwickeln, die das tägliche Leben der Menschen verbessern.“
*/