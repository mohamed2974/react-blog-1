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
