import Uls from '../Uls-component'
import SocialMedia from '../SocialMediaLinks'
import Mission from '../Mission-component'

export default function Footer({currentTheme, owner}) {
    return(
    <footer style={{backgroundColor: currentTheme.backgroundColor}}>
        <div className="form-div">
            <form>
            <h1>newsletter</h1>
            <div className="input-div">
                <input className="rounded" type="email" required="true" />     
                <button className="rounded" type="submit">submit</button>
            </div>
            </form>
            <SocialMedia />
        </div>
        <Mission />
            <Uls  array={[
            ["title 1", "link", "link", "link",],
            ["title 2", "link", "link", "link",],
            ["title 3", "link", "link", "link",]
            ]}/>
        <Copyright currentTheme={currentTheme} owner={owner}/>
    </footer>
    )
}

// ######################### COPYRIGHT SEKTION ######################### //
function Copyright({currentTheme, owner}) {
    return(
        <div className='copyright-div' style={{borderTop: `1px solid ${currentTheme.sekundColor}`,}}>
            <span>&copy; {new Date().getFullYear()} {owner}</span>
        </div>
    )
}



