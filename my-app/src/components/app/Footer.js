import Uls from '../Uls-component'
import SocialMedia from '../SocialMediaLinks'
import { Capacitor } from '@capacitor/core';

let hoverEffectFooterLists = 'relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-slate-400 after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300'

export default function Footer({owner}) {
    let lists = [
        ["Support", "Documentation", "Submit ticket", "Guides",],
        ["Company", "About", "Blog", "Jobs",],
        ["Legal", "Terms of service", "Privacy policy", "License",]
    ]

    const isMobileApp = Capacitor.isNativePlatform();

    //mobile ######################### FOOTERSECTION MOBILE ######################### //
    if (isMobileApp) {
        let MobileList = []
        lists.forEach((list)=>{
            let item = list[0]
            MobileList.push(item)
        })

        return 
            // <footer className='px-7 py-4 select-none' style={{
            //     backgroundColor: currentTheme.backgroundColor, 
            //     color: currentTheme.textColor
            // }}>
            //     <Uls  array={MobileList} style={'justify-around mb-4'} row={true} listItemStyle={'text-sm'}/>
            //     <SocialMedia style={'flex flex-row justify-center'} imgStyle={'mx-4'}/>
            // </footer>
        
    }

    //* ######################### FOOTER WEB ######################### //
    return(
    <footer className='px-4 lg:px-11 py-14 lg:py-16 select-none container' style={{
        backgroundColor: '#282c34', 
        color: 'rgb(255, 255, 255)'
    }}>
        <Uls listItemStyle={`text-slate-400 mt-2 w-fit ${hoverEffectFooterLists}`} style={'flex justify-between md:justify-around flex-wrap gap-7 mb-11'} array={lists}/>
        <SocialMedia style={'flex flex-row justify-center mb-11'} imgStyle={'mx-4'}/>
        <div className='flex justify-center'>&copy; {new Date().getFullYear()} {owner}</div>
    </footer>
    )
}



