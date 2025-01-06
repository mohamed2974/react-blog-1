import Header from './components/app/Header'
import Footer from './components/app/Footer'

let theme_color_1 = {
  backgroundColor: "#282c34",
  textColorLight: 'rgb(255, 255, 255)',
  sekundColor: 'rgb(97, 218, 251)',
  sekundColorShadow: '0px 10px 16px rgba(97, 218, 251, 0.3)'
}

let owner ='Mohamed Emran'

function App() {
  return (
    <div className="App">
      <Header currentTheme={theme_color_1} />
      {/* <Footer currentTheme={theme_color_1} owner={owner}/> */}
    </div>
  );
}


export default App;

