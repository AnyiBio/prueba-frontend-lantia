import React, { Fragment } from 'react';
import footer from '../img/05.png'
import { Home, NavigateNext, NavigateBefore, NavigateBeforeTwoTone } from '@material-ui/icons';

const Footer = () => {
    return (
        <Fragment>
            <div className="text-center">
                <NavigateBefore />
                <Home />
                <NavigateNext />
            </div>
            <img
                id="footer"
                alt="logo-footer"
                src={footer}
            />
        </Fragment>
    );
}

export default Footer;