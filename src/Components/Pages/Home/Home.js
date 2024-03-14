import React from 'react';
import ScrollToTop from '../../Shared/ScrollToTop';
import Footer from '../../layout/Footer/Footer';
import Header from '../../layout/Header/Header';
import './Home.css'
import Sliderr from '../../Shared/Slider';
import { Button } from 'react-bootstrap';
import Liste from '../../Shared/list_yous';
import Offer from '../../Shared/Offer';
import Services from '../../Shared/Services';


const Home = () => {


    return (
        <>
            <Header />
            <div className='home-container'>

                <div className='bg-container'>

                    <div className='text-1'> Join us, collect your team and </div>
                    <div className='text-12'>start the <span> Game</span></div>
                    <Button className="col-1 start-btn1" >Get Started</Button>
                </div>
                <div className='md-container'>
                    <div className='text-2' style={{ margin: '50px 0px 50px 0px', }}>Discover our Padel courts in<span>Sfax</span></div>
                    <Sliderr />
                    <div className='grey'></div>
                    <div className='text-2'>See Best <span> tournament </span> in the  </div>
                    <div className='text-2'>last month.</div>
                    <div className='divider'></div>
                    <Liste />
                    <div className='divider'></div>
                    <Offer />
                    <div className='text-2' style={{ marginTop: '50px' }}>Discover our <span> Services </span></div>
                    <Services />



                </div>


            </div>
            <Footer hideContactInfo displayNewsLetter />

            <ScrollToTop />

        </>


    );
}

export default Home;