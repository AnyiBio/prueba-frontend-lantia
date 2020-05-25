import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import block from '../img/block.png';


const PageTwo = () => {
    return (
        <Fragment>
            <Header />
            <div className="card border-0 m-5 pd-0 bg-transparent d-flex flex-row">
                <div className="card-body mr-5 ml-5 mt-5 mb-3">
                    <p className="card-text text-justify">Las incertidumbres sobre los atributos del producto a desarrollar se abordan a través de consecutivos ejercicios de vigilancia e inteligencia, que alimentan a los equipos encargados con ideas sobre <b>tecnologías, atributos, segmentos, canales, tendencias, entre otras.</b></p>
                    <p className="card-text text-justify">Ta que toda las compañías desarrollan preoductos o servicios, de manera permanente toman información del entorno, ya sea de manera <b>formal</b> o <b>informal</b></p>
                </div>
                <div className="w-100 m-5">
                    <img
                        className="img-fluid"
                        alt="logo-header"
                        src={block}
                    />
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default PageTwo;