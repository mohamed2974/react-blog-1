import { useState } from "react";
import { FaCode, FaLightbulb} from "react-icons/fa6";
import { AiOutlineRise } from "react-icons/ai";


const list =[
    {
        titel: 'Warum ich Code schreibe', 
        description: `Ich schreibe Code, weil es mir ermöglicht, kreative Lösungen zu entwickeln, die echte Probleme lösen. Für mich ist Programmieren weit mehr als nur eine technische Fähigkeit – es ist ein kreativer Prozess, bei dem Logik auf Innovation trifft. Jede Zeile Code ist für mich ein kleiner Baustein, der dazu beiträgt, komplexe Herausforderungen in elegante und effiziente Lösungen zu verwandeln.\nSchon früh habe ich erkannt, dass Technologie die Art und Weise, wie wir leben und arbeiten, grundlegend verändern kann. Diese Erkenntnis hat mich motiviert, mich kontinuierlich weiterzubilden und stets nach neuen, zukunftsweisenden Technologien zu suchen. Ob mit React, Node.js oder Tailwind CSS – ich liebe es, in neue Tools einzutauchen und mein Wissen praktisch anzuwenden, um Projekte zu realisieren, die nicht nur funktional, sondern auch benutzerfreundlich und ansprechend sind.\nFür mich ist Code die Sprache, in der ich meine Visionen und Ideen ausdrücken kann – eine Sprache, die Barrieren abbaut und neue Möglichkeiten eröffnet. Es ist diese Kombination aus Kreativität, Technik und stetiger Weiterentwicklung, die meine Leidenschaft für das Programmieren ausmacht und mich immer wieder neu inspiriert.`,
        color: 'bg-teal-400',
        textColor: 'text-teal-400',
        hoverEffekt: 'hover:bg-teal-500',
        activEffekt: `bg-teal-500 -translate-y-[20px]`,
        icon: <FaCode className="text-4xl"/>,
        afterStyle: 'after:bg-teal-300'
    },
    {
        titel: 'Was mich an Technologie begeistert', 
        description: 'Technologie fasziniert mich, weil sie ständig im Wandel ist und immer neue Möglichkeiten eröffnet. Ihre Vielseitigkeit kennt keine Grenzen – von intelligenten Automatisierungen bis hin zu leistungsstarken Webanwendungen, die den Alltag erleichtern. Mich begeistert besonders, wie Technologie bestehende Prozesse optimieren und völlig neue Wege schaffen kann, um Menschen zu vernetzen, Wissen zugänglich zu machen und kreative Ideen zum Leben zu erwecken.\nJeden Tag entdecke ich neue Tools, Frameworks und Methoden, die es ermöglichen, schneller, effizienter und innovativer zu arbeiten. Es beeindruckt mich, wie aus abstrakten Konzepten reale, funktionierende Systeme entstehen, die das Potenzial haben, Branchen zu revolutionieren und unsere Interaktion mit der digitalen Welt zu verändern. Ob es um die Verbesserung von Benutzererfahrungen, die Automatisierung wiederkehrender Aufgaben oder die Entwicklung smarter Lösungen für komplexe Probleme geht – Technologie bietet immer neue Herausforderungen, die mich antreiben und inspirieren.\nBesonders spannend finde ich es, selbst Teil dieser Entwicklung zu sein. Die Möglichkeit, mit Code aktiv zur Gestaltung der digitalen Zukunft beizutragen, motiviert mich, ständig Neues zu lernen und meine Fähigkeiten weiterzuentwickeln. Jedes Projekt ist für mich eine Gelegenheit, innovative Ansätze zu erkunden und die Grenzen des Möglichen weiter auszudehnen.',
        color: 'bg-amber-400',
        textColor: 'text-amber-400',
        hoverEffekt: 'hover:bg-amber-500',
        activEffekt: `bg-amber-500 -translate-y-[20px]`,
        icon: <FaLightbulb className="text-4xl"/>,
        afterStyle: 'after:bg-amber-300'
    },
    {
        titel: 'Wie ich mit Herausforderungen umgehe', 
        description: 'Herausforderungen sind für mich keine Hindernisse, sondern Gelegenheiten, zu wachsen und mich weiterzuentwickeln. Jedes Problem, dem ich begegne, sehe ich als eine Möglichkeit, meine Fähigkeiten zu verbessern, neue Perspektiven zu entdecken und innovative Lösungen zu entwickeln. Anstatt mich von Schwierigkeiten entmutigen zu lassen, analysiere ich sie systematisch und suche nach kreativen Wegen, sie zu überwinden.\nEin zentraler Teil meines Ansatzes ist meine lösungsorientierte Denkweise. Wenn ich auf eine komplexe Aufgabe stoße, zerlege ich sie in kleinere, greifbare Schritte, um sie effizienter anzugehen. Dabei verlasse ich mich nicht nur auf mein eigenes Wissen, sondern recherchiere gezielt, tausche mich mit anderen Entwicklern aus und lerne aus bestehenden Best Practices. Technologie entwickelt sich ständig weiter, und genau das macht es so spannend – es gibt immer neue Werkzeuge und Methoden, die helfen können, eine noch bessere Lösung zu finden.\nBesonders schätze ich den Austausch mit anderen. Zusammenarbeit ist für mich essenziell, denn oft entstehen die besten Ideen im Dialog. Ob durch Code-Reviews, Diskussionen oder gemeinsames Debugging – ein starkes Team kann selbst die schwierigsten Herausforderungen meistern. Ich bin überzeugt, dass Offenheit für Feedback und der Mut, neue Ansätze auszuprobieren, der Schlüssel zum Erfolg sind.\nLetztendlich betrachte ich jede Herausforderung als einen wichtigen Teil meines Entwicklungsprozesses. Jedes gelöste Problem macht mich nicht nur technisch versierter, sondern auch widerstandsfähiger und kreativer im Umgang mit zukünftigen Aufgaben.',
        color: 'bg-sky-400',
        textColor: 'text-sky-400',
        hoverEffekt: 'hover:bg-sky-500',
        activEffekt: `bg-sky-500 -translate-y-[20px]`,
        icon: <AiOutlineRise className="text-4xl"/>,
        afterStyle: 'after:bg-sky-300',
    },
]

const boxstyle = 'flex justify-center w-fit md:w-full items-center p-6 md:py-5 md:px-3 rounded-full md:rounded-xl shadow-lg'

export default function PersonalFAQ(){
    const [activeIndex, setactiveIndex] = useState(0)
    const [expanded, setExpanded] = useState(false)

    //* state funcs
    const handleClick = (index) => {
        if(index === activeIndex) return
        setactiveIndex(index !== activeIndex && index)
    }
    const mehrAnzeigen = () => {
        setExpanded(!expanded)
    }

    return(
        <section className="select-none bg-gray-100 shadow-2xl min-h-fit pb-16">
            <div className="grid grid-cols-3 gap-0 md:gap-8 justify-items-center relative">
                {/* buttons */}
                <ButtonsSec handleClick={handleClick} activeIndex={activeIndex} />
                {/* text div */}
                <TextSection expanded={expanded} mehrAnzeigen={mehrAnzeigen} activeIndex={activeIndex}/>
            </div>
            
        </section>
    )
}

//supcom ######################### text sec ######################### //
function TextSection({expanded, activeIndex, mehrAnzeigen}){
    return(
        <div className={` flex justify-center col-span-full bg-white rounded-lg mt-5 md:mt-0 px-6 transition-all duration-1000 overflow-hidden shadow-md ${expanded ? 'max-h-[3000px]': ' max-h-[30vh] lg:max-h-[48vh]' }`}>
            {list.map((item, index) => (
                <>
                <div key={index} className={`py-10 w-full lg:w-3/4 ${activeIndex === index ? 'block' : 'hidden'} `}>
                    <h3 className={`relative w-full md:w-fit text-xl md:text-3xl font-extrabold md:font-bold mb-5 md:mb-8 after:hidden lg:after:inline  after:absolute after:content[''] after:left-0 after:bottom-0 after:w-full after:h-0.5 ${item.afterStyle}`}>
                        {activeIndex === index && item.titel}
                    </h3>
                    <div className="">
                        {activeIndex === index && item.description.split('\n').map((line, index) => (
                        <p className="mb-4" key={index}>
                            {line}
                        </p>
                    ))}
                    </div>
                    <div className={`absolute left-0 bottom-0 pt-1 w-full h-10 bg-gradient-to-b from-transparent to-slate-200 ${expanded ? 'hidden': 'block'}`} ></div>
                    <button onClick={mehrAnzeigen} className={`absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[130%] rounded-3xl ${item.color} text-white py-1.5 px-2`}>{expanded ? 'weniger anzeigen': 'mehr anzeigen'}</button>
                </div>
                </>
            ))}
        </div>
    )
}

//supcom ######################### nav buttons ######################### //
function ButtonsSec({activeIndex, handleClick}){
    return(
        <>
        {list.map((item, index) => (
            <button className={`transition transform ${boxstyle} ${item.color}  ${activeIndex === index ? item.activEffekt : item.hoverEffekt}`} key={index} onClick={() => handleClick(index)}>
                <div className={`rounded-full md:w-16 md:h-16 text-center relative md:flex justify-center items-center md:bg-white`}>
                    <span>{item.icon}</span>
                </div>
            </button>
        ))}
        </>
    ) 
}


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