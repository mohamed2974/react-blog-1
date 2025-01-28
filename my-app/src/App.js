// meine komponente
import Header from './components/app/Header'
import Footer from './components/app/Footer'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Service from './components/pages/Service';
import Contact from './components/pages/Contact';
import ScrollToTop from './components/other/ScrollToTop';
// globals
import owner from "./global/owner"

// router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// vercel
import { SpeedInsights } from '@vercel/speed-insights/react';


// let theme_color_1 = {
//   backgroundColor: "#282c34",
//   textColor: 'rgb(255, 255, 255)',
//   sekundColor: '#00a0cd',
//   sekundColorShadow: 'rgba(97, 218, 251, 0.1) 0px 0px 20px 2px'
// }


function App() {
  return (
    <div className="font-sans">
      <SpeedInsights />
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Service' element={<Service />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
        <Footer owner={owner.fullName}/>
      </Router>
    </div>
  );
}


export default App;

