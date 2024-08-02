import React, {useContext } from 'react';
 import Home_section_1 from './components/home_section_1';
 import Home_section_2 from './components/home_section_2';
 import Home_section_3 from './components/home_section_3';
// import Home_section_4 from './components/home_section_4';
// import Home_section_5 from './components/home_section_5';
import Hero_section from './components/hero_section';

const homepage = () => {


    return <div className=' mx-auto  bg-white'>


            <Hero_section/>
        <Home_section_1 />
         <Home_section_3 />
         <Home_section_2 /> 
        
        {/* <Home_section_4 />
        <Home_section_5 />  
        */}

    </div>;
}


export default homepage;