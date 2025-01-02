import Uls from '../Uls-component'

export default function Header({currentTheme}){
    return(
        <header style={{
            backgroundColor: currentTheme.backgroundColor,
            boxShadow: currentTheme.sekundColorShadow,
        }}>
            <div className="logo-div">
                <h1>logo</h1>
            </div>
            <nav>
                <Uls array={['home', 'servis', 'about', 'contact']} row={true}/>
            </nav>
        </header>
    )
}