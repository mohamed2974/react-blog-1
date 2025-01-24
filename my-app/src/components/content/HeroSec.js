import React from 'react'
import { TypeAnimation } from 'react-type-animation';

import owner from "../../global/owner"

export default function HeroSec() {

    //* ######################### HEROSECTION WEB ######################### //
    return (
        <div className="bg-[#282c34] text-white py-10 md:py-0 min-h-screen select-none flex items-center ">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl font-bold mb-4 leading-tight">Schön, dass du hier bist!</h1>
                <p className="text-slate-300 text-xl my-8 min-h-24 md:min-h-fit"><Typing /></p>
                <div className='flex flex-col md:flex-row gap-y-4 md:gap-x-4 md:justify-center '>
                    <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-6 rounded shadow-lg">
                        Jetzt entdecken
                    </button>
                    <button className="text-blue-500 hover:text-blue-700 border border-blue-500 font-bold py-2 px-4 rounded hover:bg-blue-100 hover:border-none transition-all duration-300">
                        Mehr über mich
                    </button>
                </div>
            </div>
        </div>
    );
};

//supcom ######################### TYPE ANIMATION ######################### //
const Typing = () => {
    return(
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed once, initially
                `Hallo, ich bin ${owner.fullName.split(' ')[0]}!`,
                1500,
                'Ich teile meine Projekte, Erfolge und Visionen.',
                900,
                'Begleite mich auf meiner Reise durch die Welt der Technologie und Kreativität.',
                2000,
                'Erfahre mehr über meine Arbeit und meinen Weg als Entwickler.',
                1700,
                'Lass dich von meiner Reise und meinen Projekten inspirieren.',
                1700,
            ]}
            speed={50}
            deletionSpeed={90}
            repeat={Infinity}
        />
    )
}