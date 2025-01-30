import { BiBot } from "react-icons/bi";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaServer } from "react-icons/fa6";
import Card from "../utils/Card";

const Services = [
    {
        icon: <AiOutlineGlobal className="text-blue-500" />,
        hoverEffekt: 'hover:bg-blue-100',
        title: "Webentwicklung",
        description:
            "Erstellung moderner und responsiver Websites mit React und Tailwind CSS. Egal ob Single-Page-Applications oder komplexe Weblösungen – ich sorge für intuitive Benutzeroberflächen und eine optimale Performance.",
    },
    {
        icon: <FaServer className="text-teal-500" />,
        hoverEffekt: 'hover:bg-teal-100',
        title: "Backend-Entwicklung",
        description:
            "Entwicklung skalierbarer Backends mit Node.js und Express. Ich baue robuste APIs, die eine nahtlose Verbindung zwischen Frontend und Datenbanken ermöglichen.",
    },
    {
        icon: <BiBot className="text-purple-500"/>,
        hoverEffekt: 'hover:bg-purple-100',
        title: "Discord-Bots & Server-Management",
        description:
            "Programmierung benutzerdefinierter Discord-Bots mit Discord.js sowie professionelle Einrichtung und Verwaltung von Discord-Servern für Communities oder Unternehmen.",
    },
];


export default function ServicesSec(){
    return (
        <section className="select-none bg-gray-100 shadow-2xl flex items-center justify-center">
            <div >
                {/* überschrift und beschreibung */}
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold py-4">Meine Dienstleistungen</h2>
                    <p className="text-xl md:w-8/12 mx-auto text-slate-700">Ich biete eine Reihe von Services an, die auf modernen Technologien basieren und optimal auf deine Anforderungen abgestimmt sind.</p>
                </div>
                {/* leistungen */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Services.map((service, index) => (
                        <Card key={index} className={service.hoverEffekt} icon={service.icon} titel={service.title} description={service.description}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

