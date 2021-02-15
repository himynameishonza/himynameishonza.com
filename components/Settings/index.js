import React, { useState, useEffect } from 'react';
import styles from './Settings.scss';
import Illustration from '../Illustration';
import { useTransition, animated } from 'react-spring';
import classnames from 'classnames';
import { readThemeCookie, readMarkReadCookie, saveThemeCookie, setTheme, saveMarkReadCookie } from '../../utils/cookies';

function Settings(props) {
    const [settingsChanged, setSettingsChanged] = useState(false);
    const [themeSwitch, setThemeSwitch] = useState(readThemeCookie() === 'dark' ? true : false)
    const [markReadSwitch, setMarkReadSwitch] = useState(readMarkReadCookie())
    const transitions = useTransition(settingsChanged, null, {
        from: { position: 'absolute', bottom: 0, opacity: 0 }, enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    useEffect(() => {
        if (settingsChanged) {
            const timer = setTimeout(() => {
                setSettingsChanged(false)
            }, 3000);
            return () => clearTimeout(timer);
        }
        setTheme()
    });

    return <section className={styles["settings"]}>

        <div className={styles['settings__illustration']}>
            <Illustration illustration='settings' />
        </div>

        <nav className={styles['settings__content']}>
            <ul>
                <li>
                    <div className={styles['setting__title']}>Vzhled</div>
                    <div className={styles['setting__content']}>
                        <div className={styles['switch']}>
                            <div className={styles['switch__text']}>Světlý</div>
                            <label className={styles['switch__component']} >
                                <input type="checkbox" checked={themeSwitch} onChange={() => saveThemeCookie(readThemeCookie() === 'light' ? 'dark' : 'light')} onClick={() => setThemeSwitch(!themeSwitch)} />
                                <span className={styles['switch__slider']} ></span>
                            </label>
                            <div className={styles['switch__text']}>Tmavý</div>
                        </div>
                    </div>
                </li>

                {/* <li>
                    <div className={styles['setting__title']}>Označit přečtené články</div>
                    <div className={styles['setting__content']}>
                        <div className={styles['switch']}>
                            <div className={styles['switch__text']}>Ne</div>
                            <label className={styles['switch__component']}>
                                <input type="checkbox" checked={markReadSwitch} onChange={() => saveMarkReadCookie(!readThemeCookie())} onClick={() => setMarkReadSwitch(!markReadSwitch)} />
                                <span className={styles['switch__slider']}></span>
                            </label>
                            <div className={styles['switch__text']}>Ano</div>
                        </div>
                    </div>
                </li> */}

                {/* <li>
                    <div className={styles['setting__title']}>Možnosti sdílení</div>
                    <div className={styles['setting__content']}>
                        <div className={styles['sharing']}>
                            <a className={classnames({ [styles['inactive']]: !sharing[0] })}>Facebook</a>
                            <a className={classnames({ [styles['inactive']]: !sharing[1] })}>Twitter</a>
                            <a className={classnames({ [styles['inactive']]: !sharing[2] })}>Odkaz</a>
                            <a className={classnames({ [styles['inactive']]: !sharing[3] })}>Kindle</a>
                            <a className={classnames({ [styles['inactive']]: !sharing[4] })}>Tisk</a>
                        </div>
                    </div>
                </li> */}
            </ul>

            {transitions.map(({ item, key, props }) =>
                item && <animated.div key={key} style={props}><div className={styles['message']}>Nastavení uloženo</div></animated.div>
            )}

        </nav >
    </section >;

}

export default Settings;
