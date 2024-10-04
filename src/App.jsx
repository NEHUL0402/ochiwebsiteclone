import React from 'react'
import Navbar from './Components/Navbar'
import Landingpage from './Components/Landingpage'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Featured from './Components/Featured'
import Clients from './Components/Clients'
import Data from './Components/Data'
import Threecards from './Components/Threecards'
import Background from './Components/Background'
import Footer from './Components/Footer'


const App = () => {
  return (
    <div className='w-full h-screen'>
     <Navbar/>
     <Landingpage/>
     <Marquee/>
     <About/>
     <Eyes/>
     <Featured/>
     <Clients/>
     <Data/>
     <Threecards/>
     <Background/>
     <Footer/>
    </div>
  );
};

export default App