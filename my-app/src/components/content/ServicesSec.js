import { BiBot } from "react-icons/bi";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaServer } from "react-icons/fa6";

const Services = [
    {
        color: 'blue',
        icon: <AiOutlineGlobal />,
        hoverEffekt: `hover:bg-${Services[2].color}-100`,
        title: "Webentwicklung",
        description:
            "Erstellung moderner und responsiver Websites mit React und Tailwind CSS. Egal ob Single-Page-Applications oder komplexe Weblösungen – ich sorge für intuitive Benutzeroberflächen und eine optimale Performance.",
    },
    {
        color: 'teal',
        icon: <FaServer />,
        hoverEffekt: 'hover:bg-teal-100',
        title: "Backend-Entwicklung",
        description:
            "Entwicklung skalierbarer Backends mit Node.js und Express. Ich baue robuste APIs, die eine nahtlose Verbindung zwischen Frontend und Datenbanken ermöglichen.",
    },
    {
        color: 'purple',
        icon: <BiBot />,
        hoverEffekt: `hover:bg-${Services[2].color}-100`,
        title: "Discord-Bots & Server-Management",
        description:
            "Programmierung benutzerdefinierter Discord-Bots mit Discord.js sowie professionelle Einrichtung und Verwaltung von Discord-Servern für Communities oder Unternehmen.",
    },
];


export default function ServicesSec(){
    return (
        <section className="select-none px-4 md:px-20 py-10 md:py-0 bg-gray-100 shadow-2xl min-h-screen flex items-center justify-center">
            <div className="container">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold py-4">Meine Dienstleistungen</h2>
                    <p className="text-xl md:w-8/12 mx-auto text-slate-700">Ich biete eine Reihe von Services an, die auf modernen Technologien basieren und optimal auf deine Anforderungen abgestimmt sind.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {Services.map((service, index) => (
                        <div key={index} className={`service-item p-6 bg-white rounded-lg shadow-md transition-transform transform hover:translate-y-[-10px] hover:shadow-lg ${service.hoverEffekt}`}>
                            <div className={`text-4xl mb-5 text-${service.color}-500`}>{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-6">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

