import React, { useState, useEffect } from 'react';
import styles from './Settings.scss';
import { Fade } from "react-awesome-reveal";
import Illustration from '../Illustration'


function Settings(props) {

    const [theme, setTheme] = useState(false);
    const [markRead, setMarkRead] = useState(true);
    const [settingsChanged, setSettingsChanged] = useState(false);


    function changeSettings(settingTheme, settingMarkread) {
        setTheme(settingTheme);
        setMarkRead(settingMarkread);

        setSettingsChanged(true)
        setTimeout(() => {
            setSettingsChanged(false)
        }, 3000);

    }

    return <section className={styles["settings"]}>

        <div className={styles['settings__illustration']}>
            <Illustration illustration='settings' />
        </div>

        <nav className={styles['settings__content']}>
            <Fade duration={300} direction="right" cascade damping="0.1">
                <ul>
                    <li>
                        <div className={styles['setting__title']}>Vzhled</div>
                        <div className={styles['setting__content']}>
                            <div className={styles['switch']}>
                                <div className={styles['switch__text']}>Světlý</div>
                                <label className={styles['switch__component']} >
                                    <input type="checkbox" checked={theme} />
                                    <span className={styles['switch__slider']} onClick={() => changeSettings(!theme, markRead)}></span>
                                </label>
                                <div className={styles['switch__text']}>Tmavý</div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className={styles['setting__title']}>Označit přečtené články</div>
                        <div className={styles['setting__content']}>
                            <div className={styles['switch']}>
                                <div className={styles['switch__text']}>Ne</div>
                                <label className={styles['switch__component']}>
                                    <input type="checkbox" checked={markRead} />
                                    <span className={styles['switch__slider']} onClick={() => changeSettings(theme, !markRead)}></span>
                                </label>
                                <div className={styles['switch__text']}>Ano</div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className={styles['setting__title']}>Možnosti sdílení</div>
                        <div className={styles['setting__content']}>
                            <div className={styles['sharing']}>
                                <a>Facebook</a>
                                <a className={styles['inactive']}>Twitter</a>
                                <a>Odkaz</a>
                                <a>Kindle</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </Fade>

            {settingsChanged && <div className={styles['message']}>Nastavení uloženo</div>}
        </nav >
    </section >;

}

export default Settings;
