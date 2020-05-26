import React, { Fragment } from 'react';

//components
import Header from '../components/Header';
import Footer from '../components/Footer';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

const Result = ({ name, propositos, herramientas, procesos, estructura }) => {
    console.log(name)
    const data = [
        {
            data: {
                propositos: 0.7,
                herramientas: .8,
                procesos: 0.9,
                estructura: 0.67,
            },
            meta: { color: 'blue' }
        },
        {
            data: {
                propositos: 0.6,
                herramientas: .85,
                procesos: 0.5,
                estructura: 0.6,
            },
            meta: { color: 'red' }
        }
    ];

    const captions = {
        // columns
        propositos: 'PROPOSITOS',
        herramientas: 'HERRAMIENTAS',
        procesos: 'PROCESOS',
        estructura: 'ESTRUCTURA',
    };
    return (
        <Fragment>
            <Header title='INFORME DE RESULTADOS RADAR' />
            <div className="card border-0 ml-5 pd-0 bg-transparent">
                <div className="card-body mr-5 ml-5 mt-5 mb-3">
                    <p className="card-text text-justify">En el contexto empresarial suele usarse el término vigilancia tecnológica e inteligencia competitiva de forma intercambiada, y por esto suelen aceptarse ambos términos.</p>
                    <p className="card-text text-justify">El resultado de cada eje, es el promedio de la sumatoria de todas las preguntas de ese respectivo bloque (propósito, herramientas, procesos, estructura). Rango de evaluación: entre 1 y 4, siendo 1 el menor y 4 la mayor puntuación.</p>
                </div>
            </div>
            <div className='text-center'>
                <RadarChart
                    captions={captions}
                    data={data}
                    size={450}
                />
            </div>
            <Footer num='03' />
        </Fragment>
    );
}

export default Result;