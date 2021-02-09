import React from 'react';
import Illustration from '../Illustration';
import {ButtonGroup, Button} from '../Button';
import styles from './CookiesModal.scss';
import classnames from 'classnames';

export class CookiesModal extends React.Component {
    render() {
        return (
            <div
                className={classnames(styles['cookies-modal'], {
                    [styles['cookies-modal--hide']]: this.props.hide,
                })}
            >
                <div className={styles['cookies-modal__illustration']}>
                    <Illustration illustration="cookies" />
                </div>
                <div className={styles['cookies-modal__content']}>
                    <div className={styles['flex-container']}>
                        <h1>Zdravíčko!</h1>
                        <h2>Dáte si sušenku?</h2>
                        <Illustration illustration="cookies" />
                        <p className={styles['paragraph--narrow']}>
                            Pro využití všech funkcí je potřeba ukládat soubory cookies. Souhlasíte
                            s jejich ukládáním ve vašem prohlížeči?
                        </p>
                        <ButtonGroup>
                            <Button
                                type="secondary"
                                label="Ne, je to kampaň"
                                onclick={this.props.discardCookies}
                            />
                            <Button
                                type="primary"
                                label="Ano, souhlasím"
                                onclick={this.props.saveCookies}
                            />
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        );
    }
}

export default CookiesModal;
