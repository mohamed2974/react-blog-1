import Uls from '../Uls-component'
import MobileNav from '../Mobile-navi'
import { NavLink } from 'react-router-dom';

let hoverEffectNavList = 'relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300'

export default function Header({currentTheme}){
    
    let list = [
        <NavLink  to='/'>home</NavLink>, 
        <NavLink  to='/service'>service</NavLink>, 
        <NavLink  to='/about'>about</NavLink>, 
        <NavLink  to='/contact'>contact</NavLink>
    ]

    return(
        <header className='select-none w-full px-9 py-4 lg:px-20 lg:py-6 flex flex-row justify-between font-medium items-center' style={{
            backgroundColor: currentTheme.backgroundColor,
            boxShadow: currentTheme.sekundColorShadow,
            color: currentTheme.textColorLight
        }}>
            <div className='lg:w-1/12'>
                <h1 className='text-xl lg:text-2xl'>logo</h1>
            </div>
            <Uls style={'hidden lg:flex lg:w-2/6 '} listItemStyle={`${hoverEffectNavList} p-1`} array={list} row={true}/>
            <div className='w-1/5 flex justify-end lg:w-1/12 '>
                <a href='/' className='hidden w-full lg:flex lg:items-center lg:justify-between'>
                    <span>Sign in</span> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                        <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </a>
                <div className='lg:hidden'>
                    <MobileNav array={list}/>        
                </div>
            </div>
        </header>
    )
}