import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LandingPage = () => {
    return (
        <Fragment>
            <Header />
            <div className="card border-0 ml-5 bg-transparent">
                <div className="card-body ml-5">
                    <p className="card-text">En el contexto empresarial suele usarse el término vigilancia tecnológica e inteligencia competitiva de forma intercambiada, y por esto suelen acptarse ambos términos.</p>
                    <p className="card-text">Ambos procesos manejan metodologías y etapas similares, y se diferencian principalmente su alcance de búsqueda, y la puesta en valor de la información; procurando principalmente en el caso de la inteligencia, que se contextualica la información a la organización que la realiza. En adelantecuando se use el término <b>Inteligencia Competitiva,</b> entenderemos que la vigilancia tecnológica está contenida dentro de su definición</p>
                    <p className="card-text">Para mayor entendimiento sobre sus diferencias , podemos ver las siguientes tablas</p>
                </div>
                <div className="card w-50 border-0 d-flex direction-row">
                    <div className="card-body">
                        <h5 className="card-title bg-primary">Card title</h5>
                        <p className="card-text bg-info">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title bg-primary">Card title</h5>
                        <p className="card-text bg-info">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default LandingPage;