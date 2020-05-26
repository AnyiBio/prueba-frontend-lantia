import React, { Fragment } from 'react';
import header from '../img/header.png';
import search from '../img/04.png';
import menu from '../img/logo-menu.png';
import Menu from '@material-ui/icons/Menu';

export function Header({ title, title2 }) {
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

            <nav className="navbar navbar-expand position-relative ml-4">
                <div className='d-flex flex-row justify-content-between w-100 mr-5 '>
                    <div className="nav-item ml-5">
                        <p className="h6 mb-0">Vigilancia tecnológica</p>
                        <p className="h6 mb-0">Módulo 01</p>
                    </div>
                    <div className="nav-item">
                        <p className="h4 text-white mr-5">{title}</p>
                        <p className="h5 text-white">{title2}</p>

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
            <div className='position-absolute w-50 mt-5 pl-3'>
                <Menu
                    style={{ color: '#FFF' }}
                    fontSize="large"
                />
                <p className='text-white'>Menú</p>
            </div>
        </Fragment>
    );
}

export default Header; 