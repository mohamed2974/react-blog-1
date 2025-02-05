import React from 'react';
import { MdFileDownload } from "react-icons/md";
import { MdInfoOutline } from "react-icons/md";
import { FaRegFaceSmileBeam } from "react-icons/fa6";

import { NavLink } from 'react-router-dom';

export default function InfosSec({towButtons = true}) {
    return (
        <section className="overflow-hidden select-none bg-gray-100 shadow-2xl text-center flex items-center justify-between py-0 lg:h-[60vh]">
            <div className='w-full md:w-3/5 z-10 relative'>
                <div className='text-start'>
                    <h2 className="font-bold mb-4 text-3xl  md:text-6xl">Über mich</h2>
                    <p className="text-lg mb-6 text-slate-700">
                        Ich bin Entwickler aus Leidenschaft und setze kreative Ideen in funktionale Lösungen um. Entdecke meine Projekte und lade dir meinen Lebenslauf herunter, um zu sehen, was ich bisher erreicht habe.
                    </p>
                </div>
                <Buttons towButtons={towButtons}/>
            </div>
            <div className=' md:w-2/5 relative  '>
                <FaRegFaceSmileBeam className='absolute md:static -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0 text-[600px] text-slate-700 mx-auto rotate-[20deg] opacity-10 md:opacity-25' />
            </div>
        </section>
    );
};

//supcom ######################### PROJEKTS ######################### //
function Buttons({towButtons}){
    return(
        <div className='flex md:flex-row flex-col w-full justify-start'>
            {towButtons === true ?
            <button className="relative w-full md:w-fit mb-4 md:mb-0 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 md:mr-4 flex items-center justify-center space-x-2">
                <NavLink className='w-full' to='/about'>
                    <span class="absolute flex h-3 w-3 -right-1.5 -top-1.5">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-red-400"></span>
                    </span>
                    <MdInfoOutline className="inline" />
                    <span>Mehr erfahren</span>
                </NavLink>
            </button> 
            : null
            }
            <button className="w-full md:w-fit bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 flex items-center justify-center space-x-2">
                <MdFileDownload className="inline" />
                <span>Lebenslauf</span>
            </button>
        </div>
    )
}
