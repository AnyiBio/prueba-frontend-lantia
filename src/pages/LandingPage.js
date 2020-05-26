import React, { Fragment } from 'react';
import Eco from '@material-ui/icons/Eco';
//components
import { Header } from '../components/Header';
import Footer from '../components/Footer';
//icons
import look from '../img/icon01.png';
import process from '../img/icon02.png';

const LandingPage = () => {

    return (
        <Fragment>
            <Header title="INTRODUCCIÓN A LOS CONCEPTOS" />
            <div className="card border-0 ml-5 pd-0 bg-transparent">
                <div className="card-body mr-5 ml-5 mt-5 mb-3">
                    <p className="card-text text-justify">En el contexto empresarial suele usarse el término vigilancia tecnológica e inteligencia competitiva de forma intercambiada, y por esto suelen aceptarse ambos términos.</p>
                    <p className="card-text text-justify">Ambos procesos manejan metodologías y etapas similares, y se diferencian principalmente su alcance de búsqueda, y la puesta en valor de la información; procurando principalmente en el caso de la inteligencia, que se contextualica la información a la organización que la realiza. En adelantecuando se use el término <b>Inteligencia Competitiva,</b> entenderemos que la vigilancia tecnológica está contenida dentro de su definición.</p>
                    <p className="card-text">Para mayor entendimiento sobre sus diferencias , podemos ver las siguientes tablas:</p>
                </div>
                <div className="border-0 d-flex direction-row justify-content-around">
                    <table className='table1'>
                        <thead>
                            <tr>
                                <th scope="col">
                                    <img
                                        alt="logo-menu"
                                        src={look}
                                    />Proceso de Vigilancia</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><Eco style={{ color: '#2e7ab6' }} /> Más centrado en captar información</td>
                            </tr>
                            <tr>
                                <td> <Eco style={{ color: '#2e7ab6' }} /> Más centrado en explorar fuentes</td>
                            </tr>
                            <tr>
                                <td ><Eco style={{ color: '#2e7ab6' }} /> Carácter más operativo</td>
                            </tr>
                            <tr>
                                <td><Eco style={{ color: '#2e7ab6' }} /> Aportación de valor más baja</td>
                            </tr>
                            <tr>
                                <td> <Eco style={{ color: '#2e7ab6' }} /> Más enfásis en la difusión rápida</td>
                            </tr>
                            <tr>
                                <td >Más centrado en generar alertas</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className='table2'>
                        <thead>
                            <tr>
                                <th scope="col">
                                    <img
                                        alt="logo-menu"
                                        src={process}
                                    />Proceso de Inteligencia</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><Eco style={{ color: '#70A159' }} /> Más centrado en analizar la información</td>
                            </tr>
                            <tr>
                                <td><Eco style={{ color: '#70A159' }} /> Más centrado en recomendar acciones</td>
                            </tr>
                            <tr>
                                <td><Eco style={{ color: '#70A159' }} /> Carácter más estratégico</td>
                            </tr>
                            <tr>
                                <td><Eco style={{ color: '#70A159' }} /> Aportación de valor más allá</td>
                            </tr>
                            <tr>
                                <td><Eco style={{ color: '#70A159' }} /> Más enfásis en la comunicación efectiva</td>
                            </tr>
                            <tr>
                                <td><Eco style={{ color: '#70A159' }} /> Más centrado en generar informes</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="card-text ml-5 mr-5 mt-3 text-center h6">Tabla: Paralelo entre el proceso de vigilancia tecnológica y de inteligencia competitiva. Fuente (AENOR, 2018)</p>
            </div>
            <Footer num='01' />
        </Fragment >
    );
}

export default LandingPage;