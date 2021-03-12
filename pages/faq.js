import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import FaqContent from '../components/Faq/FaqContent';
import FaqForm from '../components/Faq/FaqForm';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

class Faq extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarTwo />
                <PageBanner 
                    pageTitle="Frequently Asked Questions" 
                />  
                <FaqContent />

                <div className="pb-100">
                    <FaqForm />
                </div>
                
                <CtaAreaTwo />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Faq;