import Header from './components/app/Header'
import Footer from './components/app/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

let theme_color_1 = {
  backgroundColor: "#282c34",
  textColorLight: 'rgb(255, 255, 255)',
  sekundColor: '#61dafb',
  sekundColorShadow: '0px 10px 16px rgba(97, 218, 251, 0.3)'
}

let owner ='Mohamed Emran'

function App() {
  return (
    <div className="App">
      <Router>
        <Header currentTheme={theme_color_1} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
        </Routes>
        <Footer currentTheme={theme_color_1} owner={owner}/>
      </Router>
    </div>
  );
}


export default App;

