import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Eco from '@material-ui/icons/Eco';
//componets
import Header from '../components/Header';
import Footer from '../components/Footer';
//icons
import graphic from '../img/ico1.png';
import briefcase from '../img/ico2.png';
import institution from '../img/ico3.png';
import consumers from '../img/ico4.png';


const PageFour = () => {
    return (
        <Fragment>
            <Header title='PROCESO DE INTELIGENCIA COMPETITIVA' />
            <div className="card border-0 m-5 pd-0 bg-transparent d-flex flex-row">
                <div className="card-body mr-5 ml-5 mt-4 mb-3">
                    <p className="card-text">El proceso de inteligencia competitiva permite apoyar el desarrollo a nivel estratégico, táctico y operativo, de acciones informadas. Captura la información que producen grupos de investigación, empresas, gobierno y consumidores, para proveer, luego de su análisis, señales y conclusiones para:</p>
                    <ul className='list'>
                        <li><Eco style={{ color: '#50B8A4' }} /> Desarrollar capacidades de innovación en la organización a través de proyectos.</li>
                        <li><Eco style={{ color: '#50B8A4' }} /> Describir el entorno competitivo para comprender los riesgos y oportunidades existentes.</li>
                        <li><Eco style={{ color: '#50B8A4' }} /> Ajustar la estrategia de acuerdo con el entorno, la competencia y la tecnología.</li>
                        <li><Eco style={{ color: '#50B8A4' }} /> Redefinir los supuestos del negocio al identificar cambios que retan la estrategia actual.</li>
                    </ul>
                </div>
                <div className="w-100">
                    <div className='d-flex'>
                        <div className='mini-card'>
                            <img
                                className='img-fluid w-50 ml-4'
                                alt="logo-graphic"
                                src={graphic}
                            />
                            <p className='mb-0'>Grupos de investigación</p>
                        </div>
                        <div className='mini-card'>
                            <img
                                className='img-fluid w-50 ml-4'
                                alt="logo-briefcase"
                                src={briefcase}
                            />
                            <p className='mb-0'>Empresas</p>
                        </div>
                        <div className='mini-card'>
                            <img
                                className='img-fluid w-50 ml-4'
                                alt="logo-institution"
                                src={institution}
                            />
                            <p className='mb-0'>Instituciones públicas</p>
                        </div>
                        <div className='mini-card'>
                            <img
                                className='img-fluid w-50 ml-4'
                                alt="logo-consumers"
                                src={consumers}
                            />
                            <p className='mb-0'>Consumidores</p>
                        </div>
                    </div>

                    <div className='d-flex'>
                        <div className='tags'>
                            <p className='mb-0'>Patentes</p>
                            <p className='mb-0'>Normatividad</p>
                        </div>
                        <div className='tags'>
                            <p className='mb-0'>Expertos</p>
                        </div>
                        <div className='tags'>
                            <p className='mb-0'>Comercial</p>
                        </div>
                        <div className='tags'>
                            <p className='mb-0'>Artículos</p>
                            <p className='mb-0'>Indicadores</p>
                        </div>
                    </div>

                    <div className='d-flex ml-5'>
                        <Grid className="circle1" >
                            <div className="quarter1">
                                <p>Apoyar el desarrollo de las capacidades de innovación</p>
                            </div>
                        </Grid>
                        <Grid className="circle2" >
                            <div className="quarter2">
                                <p>Describir el entorno competitivo</p>
                            </div>
                        </Grid>
                    </div>
                    <div className='d-flex ml-5'>
                        <Grid className="circle1" >
                            <div className="quarter3">
                                <p>Ajustar la estrategia</p>
                            </div>
                        </Grid>
                        <Grid className="circle2">
                            <div className="quarter4">
                                <p>Redefinir impuestos</p>
                            </div>
                        </Grid>
                    </div>
                </div>
            </div>

            <Footer num='04' />
        </Fragment>
    );
}

export default PageFour;