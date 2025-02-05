import React from 'react';
import { FaReact, FaNodeJs, FaDiscord, FaHtml5,  } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiExpress } from 'react-icons/si';
import { FaJsSquare } from "react-icons/fa";

import Wave from 'react-wavify'

let tools = [
    {
        icon: <FaJsSquare className="text-6xl text-yellow-500 mx-auto" />,
        name: 'JavaScript'
    },
    {
        icon: <FaReact className="text-6xl text-blue-500 mx-auto" />,
        name: 'React'
    },
    {
        icon: <FaNodeJs className="text-6xl text-green-500 mx-auto" />,
        name: 'Node.js',
    },
    {
        icon: <SiMongodb className="text-6xl text-green-600 mx-auto" />,
        name: 'MongoDB',
    },
    {
        icon: <SiExpress className="text-6xl text-black mx-auto" />,
        name: 'Express',
    },
    {
        icon: <SiTailwindcss className="text-6xl text-teal-500 mx-auto" />,
        name: 'Tailwind CSS',
    },
    {
        icon: <FaDiscord className="text-6xl text-blue-900" />,
        name: 'Discord.js',
    },
    {
        icon: <FaHtml5 className="text-6xl text-orange-600" />,
        name: 'HTML',
    }
]

export default function ToolsSec() {
    return (
        <section className="select-none overflow-hidden bg-gray-100 shadow-2xl text-center md:text-start flex justify-center items-center">
            <div className='md:flex relative flex-col lg:flex-row w-full'>
                <div className="z-10 md:w-full lg:w-2/3 text-center lg:text-start md:mb-6">
                    <h2 className="text-3xl font-bold md:mb-8 mb-4 md:text-6xl">Skills & Tech-Stack</h2>
                    <p className='text-xl lg:w-11/12 md:w-full text-slate-700'>Ich arbeite mit einer Vielzahl von Technologien, um skalierbare und performante Anwendungen zu entwickeln.</p>
                </div>   
                <div className="z-10 flex flex-wrap justify-center ">
                    {tools.map((tool, index) => (
                        <div key={index} className="m-4 text-center transition transform hover:scale-125">
                            {tool.icon}
                            <p className="mt-2 text-md">{tool.name}</p>
                        </div>
                    ))}
                </div>
                <div className='hidden md:inline absolute bottom-0 md:left-[-10%] w-[2000px] h-[150%] transform -translate-x-[40%] translate-y-3/4 rotate-[30deg]'>
                    <Waves />
                </div>
            </div>
        </section>
    );
};

//supcom ######################### WAVES COMPONENT ######################### //
function Waves() {
    return (
        <div className="absolute bottom-0 left-0 w-full h-full rounded-t-full ">
            <div className="absolute left-0 bottom-0 w-full h-full opacity-70">
                <Wave
                    fill="#d0e2f2 "
                    paused={false}
                    style={{ height: '100%',}} 
                    options={{
                        height: 35,
                        amplitude: 110, 
                        speed: 0.08,
                        points: 5,
                    }}
                />
            </div>
            <div className="absolute left-0 bottom-0 w-full h-full opacity-30">
                <Wave
                    fill="#4db8c8"
                    paused={false}
                    style={{ height: '100%' }}
                    options={{
                        height: 35,
                        amplitude: 90, 
                        speed: 0.1,
                        points: 4,
                    }}
                />
            </div>
            <div className="absolute left-0 bottom-0 w-full h-full opacity-50">
                <Wave
                    fill="#b3e5fc "
                    paused={false}
                    style={{ height: '100%' }}
                    options={{
                        height: 40,
                        amplitude: 100, 
                        speed: 0.11,
                        points: 3,
                    }}
                />
            </div>
        </div>
    );
}
