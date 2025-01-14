import Uls from '../Uls-component'
import SocialMedia from '../SocialMediaLinks'
// import Mission from '../Mission-component'

let hoverEffectFooterLists = 'relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-slate-400 after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300'

export default function Footer({currentTheme, owner}) {
    return(
    <footer className='px-9 lg:px-11 py-14 lg:py-16 select-none' style={{
        backgroundColor: currentTheme.backgroundColor, 
        color: currentTheme.textColor
    }}>
        {/* <div className='flex flex-col lg:flex-row justify-between py-7 lg:py-11'>
            <h1 className='text-xl lg:text-2xl'>Logo</h1>
            <Mission />
        </div> */}
        <Uls listItemStyle={`text-slate-400 mt-2 w-fit ${hoverEffectFooterLists}`} style={'flex justify-between md:justify-around flex-wrap gap-7 mb-11'} array={[
            ["Support", "Documentation", "Submit ticket", "Guides",],
            ["Company", "About", "Blog", "Jobs",],
            ["Legal", "Terms of service", "Privacy policy", "License",]
        ]}/>
        <SocialMedia style={'flex flex-row justify-center mb-11'} imgStyle={'mx-4'}/>
        <div className='flex justify-center'>&copy; {new Date().getFullYear()} {owner}</div>
    </footer>
    )
}



