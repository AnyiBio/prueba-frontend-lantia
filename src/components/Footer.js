import React, { Fragment } from 'react';
import footer from '../img/05.png'

const Footer = () => {
    return (
        <Fragment>
            <img
                className="img-fluid position-relative"
                alt="logo-footer"
                src={footer}
            />
        </Fragment>
    );
}

export default Footer;