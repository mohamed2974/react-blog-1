/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import './App.css';

let theme_color_1 = {
  backgroundColor: "#282c34",
  sekundColor: 'rgb(97, 218, 251)',
  sekundColorShadow: '0px 10px 16px rgba(97, 218, 251, 0.3)'
}

let owner ='Mohamed Emran'
function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

function Header(){
  return(
      <header style={{
        backgroundColor: theme_color_1.backgroundColor,
        boxShadow: theme_color_1.sekundColorShadow,
      }}>
          <div className="logo-div">
              <h1>logo</h1>
          </div>
          <nav>
              <ul>
                  <li>link</li>
                  <li>link</li>
                  <li>link</li>
                  <li>link</li>
              </ul>
          </nav>
      </header>
  )
}

function Footer() {
  return(
    <footer style={{backgroundColor: theme_color_1.backgroundColor}}>
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
      <div className="ul-div">
        <Uls  array={[
          ["title 1", "link", "link", "link",],
          ["title 2", "link", "link", "link",],
          ["title 3", "link", "link", "link",]
        ]}/>
        <Mission />
      </div>
      <Copyright />
    </footer>
  )
}

// ######################### ULS COMPONENT ######################### //
function Uls({array}){
  return(
    <>
      {array.map((ul, ulindex) => (
        <ul key={ulindex}>
          {ul.map((item, index) =>(
            index === 0 ? (
              <h3 key={index}>{item}</h3>
            ) : (
              <li key={index}>{item}</li>
            )
          ))}
        </ul>
      ))}
    </>
  )
}

// ######################### SOCIAL MEDIA LINKS ######################### //
function SocialMedia(){
  return(
    <ul className="socialmedia-div">
      <li><img src='./img/social/youtube.png' alt=''/></li>
      <li><img src='./img/social/twitter.png' alt=''/></li>
      <li><img src='./img/social/instagram_4138124.png' alt=''/></li>
      <li><img src='./img/social/facebook_5968764.png' alt=''/></li>
      <li><img src='./img/social/discord_5968756.png' alt=''/></li>
    </ul>
  )
}

// ######################### COPYRIGHT SEKTION ######################### //
function Copyright() {
  return(
    <div className='copyright-div' style={{borderTop: `1px solid ${theme_color_1.sekundColor}`,}}>
      <span>&copy; {new Date().getFullYear()} {owner}</span>
    </div>
  )
}

// ######################### "OUR MISSION" DIV ######################### //
function Mission() {
  return(
    <div className="mission-div">
      <h2>our mission</h2>
      <p>
        this is a paragraph hehe hehe he hehe hehehe he hehe he hehehe 
      </p>
    </div>
  )
}


export default App;

