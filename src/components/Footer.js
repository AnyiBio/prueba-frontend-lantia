import React, { Fragment, useHistory } from 'react';
import footer from '../img/05.png';
import { Home, NavigateNext, NavigateBefore, LastPage, FirstPage } from '@material-ui/icons';

import { Link } from 'react-router-dom';

const Footer = ({ num }) => {
    return (
        <Fragment>
            <div id='footer'>
                <img
                    className='img-fluid position-absolute'
                    alt="logo-footer"
                    src={footer}
                />
                <div className="text-center position-relative mt-5">
                    <div>
                        <Link className='link' to='/'><FirstPage /></Link>
                        <Link className='link' to='/two'><NavigateBefore /></Link>
                        <Link className='link' to='/'><Home /></Link>
                        <Link className='link' to='/three'><NavigateNext /></Link>
                        <Link className='link' to='/four'><LastPage /></Link>
                    </div>
                    <div>
                        <p><b>{num}/04</b></p>
                    </div>
                </div>

            </div>

        </Fragment>
    );
}

export default Footer;