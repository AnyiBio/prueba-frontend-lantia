import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
//components
import Header from '../components/Header';
import Footer from '../components/Footer';


const Activity = () => {

    const history = useHistory();

    const [name, setName] = useState({});
    const [propositos, setPropositos] = useState(0);
    const [herramientas, setHerramientas] = useState(0);
    const [procesos, setProcesos] = useState(0);
    const [estructura, setEstructura] = useState(0);

    console.log(name);
    console.log(propositos);
    console.log(herramientas);
    console.log(procesos);
    console.log(estructura);

    const saveData = (e) => {
        e.preventDefault();
        localStorage.setItem('data', JSON.stringify(name));
    }

    return (
        <Fragment>
            <Header title='PREGUNTAS DIAGNÓSTICO' />
            <div className="text-center position-relative mr-5 ml-5 mt-5 mb-0">
                <p>Bloques de preguntas que se convierten en cuatro ejes: <b>propósito, herramienta, procesos, estructura.</b></p>
                <div className='d-flex justify-content-center'>
                    <h2 className='text-info'>NOMBRE DE LA EMPRESA: </h2><input type="text" id="ip1" onChange={(e) => setName(e.target.value)} />
                </div>
                <p className='m-2'>Evalúe de 1 a 4, donde 1 es <b>nunca</b> y 4 es <b>siempre</b></p>
            </div>
            <Carousel style={{ backgroundColor: '#FFF' }}>

                <div className='d-flex justify-content-center mt-0'>

                    <table id='create-form' className='table-activity'>
                        <p className='ml-5'><b>PROPÓSITOS:</b> Usted usa información del entorno competitivo para:</p>
                        <tr className='text-center'>
                            <th></th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                        </tr>
                        <tr>
                            <td>Planeación estratégica</td>
                            <td><input type="radio" name="row-1" data-col="1" onClick={() => setPropositos(propositos + 1)} /></td>
                            <td><input type="radio" name="row-1" data-col="2" onClick={() => setPropositos(propositos + 2)} /></td>
                            <td><input type="radio" name="row-1" data-col="3" onClick={() => setPropositos(propositos + 3)} /></td>
                            <td><input type="radio" name="row-1" data-col="4" onClick={() => setPropositos(propositos + 4)} /></td>
                        </tr>
                        <tr>
                            <td>Generación de ideas</td>
                            <td><input type="radio" name="row-2" data-col="1" onClick={() => setPropositos(propositos + 1)} /></td>
                            <td><input type="radio" name="row-2" data-col="2" onClick={() => setPropositos(propositos + 2)} /></td>
                            <td><input type="radio" name="row-2" data-col="3" onClick={() => setPropositos(propositos + 3)} /></td>
                            <td><input type="radio" name="row-2" data-col="4" onClick={() => setPropositos(propositos + 4)} /></td>
                        </tr>
                        <tr>
                            <td>Desarrollo de producto</td>
                            <td><input type="radio" name="row-3" data-col="1" onClick={() => setPropositos(propositos + 1)} /></td>
                            <td><input type="radio" name="row-3" data-col="2" onClick={() => setPropositos(propositos + 2)} /></td>
                            <td><input type="radio" name="row-3" data-col="3" onClick={() => setPropositos(propositos + 3)} /></td>
                            <td><input type="radio" name="row-3" data-col="4" onClick={() => setPropositos(propositos + 4)} /></td>
                        </tr>
                        <tr>
                            <td>Acceso a nuevos mercados</td>
                            <td><input type="radio" name="row-4" data-col="1" onClick={() => setPropositos(propositos + 1)} /></td>
                            <td><input type="radio" name="row-4" data-col="2" onClick={() => setPropositos(propositos + 2)} /></td>
                            <td><input type="radio" name="row-4" data-col="3" onClick={() => setPropositos(propositos + 3)} /></td>
                            <td><input type="radio" name="row-4" data-col="4" onClick={() => setPropositos(propositos + 4)} /></td>
                        </tr>
                        <tr>
                            <td>Búsqueda de nuevos clientes</td>
                            <td><input type="radio" name="row-5" data-col="1" onClick={() => setPropositos(propositos + 1)} /></td>
                            <td><input type="radio" name="row-5" data-col="2" onClick={() => setPropositos(propositos + 2)} /></td>
                            <td><input type="radio" name="row-5" data-col="3" onClick={() => setPropositos(propositos + 3)} /></td>
                            <td><input type="radio" name="row-5" data-col="4" onClick={() => setPropositos(propositos + 4)} /></td>
                        </tr>
                        <tr>
                            <td>Adquisición de tecnologías</td>
                            <td><input type="radio" name="row-6" data-col="1" onClick={() => setPropositos(propositos + 1)} /></td>
                            <td><input type="radio" name="row-6" data-col="2" onClick={() => setPropositos(propositos + 2)} /></td>
                            <td><input type="radio" name="row-6" data-col="3" onClick={() => setPropositos(propositos + 3)} /></td>
                            <td><input type="radio" name="row-6" data-col="4" onClick={() => setPropositos(propositos + 4)} /></td>
                        </tr>
                    </table>

                </div>

                <div className='d-flex justify-content-center mt-0'>
                    <table className='table-activity'>
                        <p className='ml-5'><b>HERRAMIENTAS:</b> Usted hace uso de las siguientes herramientas:</p>
                        <tr className='text-center'>
                            <th></th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                        </tr>
                        <tr>
                            <td>Buscadores gratuitos de patentes</td>
                            <td><input type="radio" name="row-1" data-col="1" onClick={() => setHerramientas(herramientas + 1)} /></td>
                            <td><input type="radio" name="row-1" data-col="2" onClick={() => setHerramientas(herramientas + 2)} /></td>
                            <td><input type="radio" name="row-1" data-col="3" onClick={() => setHerramientas(herramientas + 3)} /></td>
                            <td><input type="radio" name="row-1" data-col="4" onClick={() => setHerramientas(herramientas + 4)} /></td>
                        </tr>
                        <tr>
                            <td>Entrevistas a expertos</td>
                            <td><input type="radio" name="row-2" data-col="1" onClick={() => setHerramientas(herramientas + 1)} /></td>
                            <td><input type="radio" name="row-2" data-col="2" onClick={() => setHerramientas(herramientas + 2)} /></td>
                            <td><input type="radio" name="row-2" data-col="3" onClick={() => setHerramientas(herramientas + 3)} /></td>
                            <td><input type="radio" name="row-2" data-col="4" onClick={() => setHerramientas(herramientas + 4)} /></td>
                        </tr>
                        <tr>
                            <td>Bases de datos del mercado</td>
                            <td><input type="radio" name="row-3" data-col="1" onClick={() => setHerramientas(herramientas + 1)} /></td>
                            <td><input type="radio" name="row-3" data-col="2" onClick={() => setHerramientas(herramientas + 2)} /></td>
                            <td><input type="radio" name="row-3" data-col="3" onClick={() => setHerramientas(herramientas + 3)} /></td>
                            <td><input type="radio" name="row-3" data-col="4" onClick={() => setHerramientas(herramientas + 4)} /></td>
                        </tr>
                        <tr>
                            <td>Visualizadores de datos</td>
                            <td><input type="radio" name="row-4" data-col="1" onClick={() => setHerramientas(herramientas + 1)} /></td>
                            <td><input type="radio" name="row-4" data-col="2" onClick={() => setHerramientas(herramientas + 2)} /></td>
                            <td><input type="radio" name="row-4" data-col="3" onClick={() => setHerramientas(herramientas + 3)} /></td>
                            <td><input type="radio" name="row-4" data-col="4" onClick={() => setHerramientas(herramientas + 4)} /></td>
                        </tr>
                        <tr>
                            <td>Software de Minería de datos</td>
                            <td><input type="radio" name="row-5" data-col="1" onClick={() => setHerramientas(herramientas + 1)} /></td>
                            <td><input type="radio" name="row-5" data-col="2" onClick={() => setHerramientas(herramientas + 2)} /></td>
                            <td><input type="radio" name="row-5" data-col="3" onClick={() => setHerramientas(herramientas + 3)} /></td>
                            <td><input type="radio" name="row-5" data-col="4" onClick={() => setHerramientas(herramientas + 4)} /></td>
                        </tr>
                    </table>
                </div>
                <div className='d-flex justify-content-center mt-0'>
                    <table className='table-activity'>
                        <p className='ml-5'><b>PROCESOS:</b> Usted realiza las siguientes actividades:</p>
                        <tr className='text-center'>
                            <th></th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                        </tr>
                        <tr>
                            <td>Identifica en diferentes áreas sus necesidades de información</td>
                            <td><input type="radio" name="row-1" data-col="1" onClick={() => setProcesos(procesos + 1)} /></td>
                            <td><input type="radio" name="row-1" data-col="2" onClick={() => setProcesos(procesos + 2)} /></td>
                            <td><input type="radio" name="row-1" data-col="3" onClick={() => setProcesos(procesos + 3)} /></td>
                            <td><input type="radio" name="row-1" data-col="4" onClick={() => setProcesos(procesos + 4)} /></td>
                        </tr>
                        <tr>
                            <td>Prioriza las temáticas de mayor interés con tomadores de decisiones</td>
                            <td><input type="radio" name="row-2" data-col="1" onClick={() => setProcesos(procesos + 1)} /></td>
                            <td><input type="radio" name="row-2" data-col="2" onClick={() => setProcesos(procesos + 2)} /></td>
                            <td><input type="radio" name="row-2" data-col="3" onClick={() => setProcesos(procesos + 3)} /></td>
                            <td><input type="radio" name="row-2" data-col="4" onClick={() => setProcesos(procesos + 4)} /></td>
                        </tr>
                        <tr>
                            <td>Clasifica fuentes de información relevantes</td>
                            <td><input type="radio" name="row-3" data-col="1" onClick={() => setProcesos(procesos + 1)} /></td>
                            <td><input type="radio" name="row-3" data-col="2" onClick={() => setProcesos(procesos + 2)} /></td>
                            <td><input type="radio" name="row-3" data-col="3" onClick={() => setProcesos(procesos + 3)} /></td>
                            <td><input type="radio" name="row-3" data-col="4" onClick={() => setProcesos(procesos + 4)} /></td>
                        </tr>
                        <tr>
                            <td>Llama a expertos para analizar información</td>
                            <td><input type="radio" name="row-4" data-col="1" onClick={() => setProcesos(procesos + 1)} /></td>
                            <td><input type="radio" name="row-4" data-col="2" onClick={() => setProcesos(procesos + 2)} /></td>
                            <td><input type="radio" name="row-4" data-col="3" onClick={() => setProcesos(procesos + 3)} /></td>
                            <td><input type="radio" name="row-4" data-col="4" onClick={() => setProcesos(procesos + 4)} /></td>
                        </tr>
                        <tr>
                            <td>Presenta resultados de inteligencia</td>
                            <td><input type="radio" name="row-5" data-col="1" onClick={() => setProcesos(procesos + 1)} /></td>
                            <td><input type="radio" name="row-5" data-col="2" onClick={() => setProcesos(procesos + 2)} /></td>
                            <td><input type="radio" name="row-5" data-col="3" onClick={() => setProcesos(procesos + 3)} /></td>
                            <td><input type="radio" name="row-5" data-col="4" onClick={() => setProcesos(procesos + 4)} /></td>
                        </tr>
                        <tr>
                            <td>Documenta apredizajes</td>
                            <td><input type="radio" name="row-6" data-col="1" onClick={() => setProcesos(procesos + 1)} /></td>
                            <td><input type="radio" name="row-6" data-col="2" onClick={() => setProcesos(procesos + 2)} /></td>
                            <td><input type="radio" name="row-6" data-col="3" onClick={() => setProcesos(procesos + 3)} /></td>
                            <td><input type="radio" name="row-6" data-col="4" onClick={() => setProcesos(procesos + 4)} /></td>
                        </tr>
                    </table>
                </div>
                <div className='d-flex justify-content-center mt-0'>
                    <table className='table-activity'>
                        <p className='ml-5'><b>ESTRUCTURA:</b> Su organización cuenta con:</p>
                        <tr className='text-center'>
                            <th></th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                        </tr>
                        <tr>
                            <td>Dedicación de tiempo para búsqueda de información</td>
                            <td><input type="radio" name="row-1" data-col="1" onClick={() => setEstructura(estructura + 1)} /></td>
                            <td><input type="radio" name="row-1" data-col="2" onClick={() => setEstructura(estructura + 2)} /></td>
                            <td><input type="radio" name="row-1" data-col="3" onClick={() => setEstructura(estructura + 3)} /></td>
                            <td><input type="radio" name="row-1" data-col="4" onClick={() => setEstructura(estructura + 4)} /></td>
                        </tr>
                        <tr>
                            <td>Compra de estudios de inteligencia</td>
                            <td><input type="radio" name="row-2" data-col="1" onClick={() => setEstructura(estructura + 1)} /></td>
                            <td><input type="radio" name="row-2" data-col="2" onClick={() => setEstructura(estructura + 2)} /></td>
                            <td><input type="radio" name="row-2" data-col="3" onClick={() => setEstructura(estructura + 3)} /></td>
                            <td><input type="radio" name="row-2" data-col="4" onClick={() => setEstructura(estructura + 4)} /></td>
                        </tr>
                        <tr>
                            <td>Un líder que promueve los ejercicios de inteligencia</td>
                            <td><input type="radio" name="row-3" data-col="1" onClick={() => setEstructura(estructura + 1)} /></td>
                            <td><input type="radio" name="row-3" data-col="2" onClick={() => setEstructura(estructura + 2)} /></td>
                            <td><input type="radio" name="row-3" data-col="3" onClick={() => setEstructura(estructura + 3)} /></td>
                            <td><input type="radio" name="row-3" data-col="4" onClick={() => setEstructura(estructura + 4)} /></td>
                        </tr>
                        <tr>
                            <td>Comité para priorizar necesidades de inteligencia</td>
                            <td><input type="radio" name="row-4" data-col="1" onClick={() => setEstructura(estructura + 1)} /></td>
                            <td><input type="radio" name="row-4" data-col="2" onClick={() => setEstructura(estructura + 2)} /></td>
                            <td><input type="radio" name="row-4" data-col="3" onClick={() => setEstructura(estructura + 3)} /></td>
                            <td><input type="radio" name="row-4" data-col="4" onClick={() => setEstructura(estructura + 4)} /></td>
                        </tr>
                        <tr>
                            <td>Espacios de presentación de resultados</td>
                            <td><input type="radio" name="row-5" data-col="1" onClick={() => setEstructura(estructura + 1)} /></td>
                            <td><input type="radio" name="row-5" data-col="2" onClick={() => setEstructura(estructura + 2)} /></td>
                            <td><input type="radio" name="row-5" data-col="3" onClick={() => setEstructura(estructura + 3)} /></td>
                            <td><input type="radio" name="row-5" data-col="4" onClick={() => setEstructura(estructura + 4)} /></td>
                        </tr>
                        <tr>
                            <td>Adquisición de tecnologías</td>
                            <td><input type="radio" name="row-6" data-col="1" onClick={() => setEstructura(estructura + 1)} /></td>
                            <td><input type="radio" name="row-6" data-col="2" onClick={() => setEstructura(estructura + 2)} /></td>
                            <td><input type="radio" name="row-6" data-col="3" onClick={() => setEstructura(estructura + 3)} /></td>
                            <td><input type="radio" name="row-6" data-col="4" onClick={() => setEstructura(estructura + 4)} /></td>
                        </tr>

                    </table>

                </div>

            </Carousel>
            <button className='button-activity' type='button' onClick={saveData}>VALIDAR</button>
            <Footer num='03' />
        </Fragment >);
}

export default Activity;