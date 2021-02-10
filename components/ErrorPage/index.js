import React from 'react';
import Router from 'next/router';
import Illustration from '../Illustration';
import styles from './ErrorPage.scss';
import classnames from 'classnames';
export class ErrorPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeout: 15,
        };
    }

    backToHomePage() {

        if (this.state.timeout === 0) {
            Router.push(`/`)
        } else {
            setTimeout(
                function () {
                    this.setState({ timeout: this.state.timeout - 1 });
                    this.backToHomePage();
                }.bind(this),
                1000
            );
        }
    }

    componentDidMount() {
        if (this.props.statusCode !== 500) {
            this.backToHomePage();
        }
    }

    render() {
        return (
            <div
                className={styles['error-page']}>
                <div className={styles['error-page__illustration']}>
                    <Illustration illustration={this.props.statusCode === 404 ? 'error404' : 'error500'} />
                </div>
                <div className={styles['error-page__content']}>
                    <div className={styles['flex-container']}>
                        <h1>{this.props.statusCode}</h1>
                        <h2>{this.props.statusCode === 404 && 'Požadovaná stránka nebyla nenalezena'}</h2>
                        <h2>{this.props.statusCode === 408 && 'Vypršel čas spojení'}</h2>
                        <h2>{this.props.statusCode !== 404 && this.props.statusCode !== 408 ? 'Neočekávaná chyba serveru' : null}</h2>
                        <Illustration illustration={this.props.statusCode === 404 ? 'error404' : 'error500'} />

                        <div className={styles['details']}>
                            <h3>Proč vidíte tuto stránku?</h3>

                            {this.props.statusCode === 404 &&
                                <ul>
                                    <li>Požadovaná stránka již není mezi námi</li>
                                    <li>Došlo ke změně adresy stránky</li>
                                    <li>Máte rádi stránky 404</li>
                                </ul>}

                            {this.props.statusCode === 408 &&
                                <ul>
                                    <li>Vypršel čas pro načtení stránky</li>
                                    <li>Máte problémy s připojením k Internetům</li>
                                    <li>Autor webu neumí správně odladit kód</li> :
                            </ul>}

                            {this.props.statusCode !== 404 && this.props.statusCode !== 408 ?
                                <ul>
                                    <li>Server je dočasně nedostupný</li>
                                    <li>Něco se šeredně pokazilo</li>
                                    <li>Na serveru probíhá údržba</li>
                                    <li>Autor webu neumí napsat funkční kód</li>
                                </ul> : null}
                        </div>

                        <h4>
                            {this.props.statusCode !== 500 ?
                                <>
                                    Přesměrováni na <a href="/" aria-label="Odkaz na domovskou stránku">homepage</a> proběhne za {this.state.timeout} vteřin
                                    {this.state.timeout === 1 ? 'u' : null}
                                    {this.state.timeout === 2 || this.state.timeout === 3 || this.state.timeout === 4 ? 'y' : null}
                                </>
                                : "Nic dalšího tu momentálně není k vidění. Zkuste to, prosím, později."}
                        </h4>
                    </div>
                </div>
            </div >
        );
    }
}

export default ErrorPage;
