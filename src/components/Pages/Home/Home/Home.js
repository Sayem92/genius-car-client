import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contacts from '../Contacts/Contacts';
import PopularProducts from '../PopularProducts/PopularProducts';
import Services from '../Services/Services';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Contacts></Contacts>
            <PopularProducts></PopularProducts>
            <Team></Team>
            
        </div>
    );
};

export default Home;