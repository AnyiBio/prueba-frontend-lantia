import React, { Fragment } from 'react';
import header from '../img/header.png';
import search from '../img/04.png';
import menu from '../img/logo-menu.png';

const Header = () => {
    return (
        <Fragment>
            <img
                className="img-fluid position-absolute"
                alt="logo-header"
                src={header}
            />
            <img
                className="img-fluid position-absolute "
                alt="logo-menu"
                src={menu}
            />
            <nav className="navbar navbar-expand position-relative ml-5">
                <div className='d-flex flex-row justify-content-between w-100 mr-5 '>
                    <div className="nav-item ml-4">
                        <p className="h6 mb-0 text-primary ">Vigilancia tecnológica</p>
                        <p className="h6 mb-0 text-primary">Módulo 01</p>
                    </div>
                    <div className="nav-item">
                        <p className="h2 text-white mr-4">INTRODUCCIÓN A LOS CONCEPTOS</p>

                    </div>
                    <div className="nav-item">
                        <img
                            className="img-fluid position-absolute"
                            alt="logo-header"
                            src={search}
                        />
                    </div>
                </div>



            </nav>
        </Fragment>
    );
}

export default Header; 