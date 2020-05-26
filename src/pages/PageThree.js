import React, { Fragment } from 'react';
import Eco from '@material-ui/icons/Eco';
//components
import Header from '../components/Header';
import Footer from '../components/Footer';
//icons
import activity from '../img/activity.png';

const PageThree = () => {
    return (
        <Fragment>
            <Header title="ACTIVIDAD PRÁCTICA 1" />
            <div className='text-center mt-3 mb-0'>
                <img
                    className="logo-activity"
                    alt="logo-activity"
                    src={activity}
                />
            </div>
            <div className="card border-0 mr-5 ml-5 p-0 bg-transparent d-flex flex-row">
                <div className="card-body mr-5 ml-5 mt-5 mb-3">
                    <p className="card-text text-justify">A continuación lo invitamos a diligenciar el siguiente <b>autodiagnóstico</b>, que consta de cuatro bloques de preguntas, eligiendo una respuesta para cada pregunta, teniendo en cuenta una escala de puntuación de 1 a 4, siendo uno <b>NUNCA</b> y cuatro  <b>SIEMPRE</b></p>
                    <p className="card-text text-justify">Importante: si el recurso lo están realizando varias persona de la misma organización, los resultados generados corresponden a las respuestas que diligencie usted por lo cual le recomendamos alguna de estas dos opciones:</p>
                    <ul className='list'>
                        <li className='mb-3'><Eco style={{ color: '#70A159' }} /> Concertar previamente las respuestas a dar en cada punto del diagnóstico.</li>
                        <li><Eco style={{ color: '#70A159' }} /> Diligenciar individualmente y luego comparar los resultados para reconocer un diagnóstico</li>
                    </ul>
                </div>

            </div>
            <div className='text-center'>
                <button className='button-activity'>INICIAR</button>
            </div>
            <Footer num='03' />
        </Fragment>
    );
}

export default PageThree;