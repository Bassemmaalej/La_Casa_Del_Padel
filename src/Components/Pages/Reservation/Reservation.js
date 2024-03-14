import React from 'react';
import ScrollToTop from '../../Shared/ScrollToTop';
import Footer from '../../layout/Footer/Footer';
import Header from '../../layout/Header/Header';
import ResCard from '../../Shared/ResCard';
import { Row } from "react-bootstrap";



const Reservation = () => {


    return (
        <>
            <Header />
            <div className="container-fluid text-center" style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '150px', }} >
                <Row style={{
                    display: 'flex',
                    width: 'fit-content',
                    justifyContent: 'center',
                    height: 'auto',
                    gap: '80px',
                    alignItems: 'center',
                    padding: '0px'

                }}>
                    <ResCard />
                    <ResCard />
                    <ResCard />

                </Row>
            </div>


            <Footer hideContactInfo displayNewsLetter />

            <ScrollToTop />
        </>


    );
}

export default Reservation;