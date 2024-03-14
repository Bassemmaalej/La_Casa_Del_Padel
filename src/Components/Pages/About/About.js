import React from 'react';
import ScrollToTop from '../../Shared/ScrollToTop';
import Footer from '../../layout/Footer/Footer';
import Header from '../../layout/Header/Header';
import Box from '@mui/material/Box';
import './About.css';
import Support from '../../Shared/Support';
import Grid from '@mui/material/Grid';
import Maps from '../../Shared/Maps';
import GIT from '../../Shared/GIT';


const About = () => {


    return (
        <>
            <Header />

            <div className='about-container'>
                <Box sx={{ width: '100%' }} style={{ marginTop: '80px' }}>
                    <Grid container spacing={10}>
                        <Grid item xs={6} style={{ minWidth: 'max-content' }}>
                            <div className='about-title'> LA CASA DEL PADEL</div>
                            <div className='about-subtitle'>Founded In 2021</div>
                            <div className='about-content'>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore atque voluptatum excepturi laudantium magni nemo voluptatibus magnam praesentium rem officiis pariatur, laboriosam beatae fugiat culpa saepe et aliquid sapiente commodi?</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit exercitationem incidunt ducimus quisquam sapiente optio quasi deserunt explicabo repellendus eaque accusantium voluptatibus, inventore, debitis odit dolorum a quae dolorem animi.</li>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nemo tempora vitae, vel soluta assumenda? Ducimus quidem quam alias consequatur explicabo consequuntur laboriosam reprehenderit. Dicta quibusdam quas vel dolorum obcaecati?</li>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nemo tempora vitae, vel soluta assumenda? Ducimus quidem quam alias consequatur explicabo consequuntur laboriosam reprehenderit. Dicta quibusdam quas vel dolorum obcaecati?</li>
                                </ul>
                            </div>

                        </Grid>
                        <Grid item xs={6} style={{ minWidth: 'max-content' }}>
                            <div className='img-cont'></div>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <Support />
            <Support />

            <Box sx={{ width: '100%' }} style={{ marginTop: '80px' }}>
                <Grid container spacing={10}>
                    <Grid item xs={6} style={{ minWidth: 'max-content' }}>
                        <GIT />
                    </Grid>
                    <Grid item xs={6} style={{ minWidth: 'max-content' }}>
                        <div className='map' style={{ width: '100%', height: 'fit-content' }}>
                            <Maps />
                        </div>
                    </Grid>
                </Grid>
            </Box>
            <Footer hideContactInfo displayNewsLetter />

            <ScrollToTop />
        </>


    );
}

export default About;