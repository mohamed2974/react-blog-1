import Header from './components/app/Header'
import Footer from './components/app/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

let theme_color_1 = {
  backgroundColor: "#282c34",
  textColor: 'rgb(255, 255, 255)',
  sekundColor: '#00a0cd',
  sekundColorShadow: 'rgba(97, 218, 251, 0.1) 0px 0px 20px 2px'
}

let owner ='Mohamed Emran'

function App() {
  return (
    <div className="font-sans">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
        </Routes>
        <Footer owner={owner}/>
      </Router>
    </div>
  );
}


export default App;

