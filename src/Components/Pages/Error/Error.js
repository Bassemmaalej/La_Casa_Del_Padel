import React from 'react';
import ScrollToTop from '../../Shared/ScrollToTop';
import Footer from '../../layout/Footer/Footer';
import Header from '../../layout/Header/Header';



const ErrorNotFound = () => {


    return (
        <>
            <Header />

            <h1> Error Not Found</h1>
            <Footer hideContactInfo displayNewsLetter />

            <ScrollToTop />
        </>


    );
}

export default ErrorNotFound;