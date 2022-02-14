
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Tours from "../Tours/Tours.js";
import {Routes , Route} from 'react-router-dom';

function Home () {
    return (

        <>
           <Header/>

           <Routes>
           <Route path="/" element={}        />     
         
           

           </Routes>
          
           <Tours/>
           <Footer/>

           <Tour tour={tour}/>
        </>

    );
}

export default Home;