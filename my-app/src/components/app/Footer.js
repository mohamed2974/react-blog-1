import Uls from '../Uls-component'
import SocialMedia from '../SocialMediaLinks'
import { Capacitor } from '@capacitor/core';

const hoverEffectFooterLists = 'relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-slate-400 after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300'

export default function Footer({owner}) {
    const lists = [
        ["Hilfe & Support", "Problem melden", 'Technischer Support', "FAQ",],
        ["Über mich", "Meine Geschichte", 'Zusammenarbeit', 'Dienstleistungen'],
        ["Rechtliches", "Impressum", "Datenschutzerklärung", "Nutzungsbedingungen",]
    ]

    const isMobileApp = Capacitor.isNativePlatform();

    //mobile ######################### FOOTERSECTION MOBILE ######################### //
    if (isMobileApp) {
        return 
    }

    //* ######################### FOOTER WEB ######################### //
    return(
    <footer className='px-6 lg:px-11 py-14  select-none' style={{
        backgroundColor: '#282c34', 
        color: 'rgb(255, 255, 255)'
    }}>
        {/*######################### navigation #########################*/}
        <Uls listItemStyle={`text-slate-400 mt-2 w-fit ${hoverEffectFooterLists}`} style={'flex justify-between md:justify-around flex-wrap gap-7 mb-11'} array={lists}/>
        {/*######################### social media #########################*/}
        <SocialMedia style={'flex flex-row justify-center mb-11'}/>
        {/*######################### copyright #########################*/}
        <div className="flex justify-center text-sm py-3">
            <span>&copy; {new Date().getFullYear()} {owner}</span>
            <span className='mx-2'>|</span> 
            <a 
                href="https://creativecommons.org/licenses/by-nc-nd/4.0/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline"
            >
            CC BY-NC-ND 4.0
            </a>
        </div>

    </footer>
    )
}



