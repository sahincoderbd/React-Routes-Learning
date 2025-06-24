import React from 'react';
import NavMenu from './Nav/nav';
import { Outlet } from 'react-router';
import Footer from './Components/Footer';
const Home = () => {
    return (
        <>
        <NavMenu></NavMenu>
        <Outlet></Outlet>
        <Footer></Footer>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        
        </>
    );
};

export default Home;