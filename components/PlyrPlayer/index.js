import React from 'react';
import Plyr from 'plyr-react'
import "./PlyrPlayer.scss";

export default function PlyrPlayer(props) {
    const localization = {
        restart: 'Restartovat',
        rewind: 'Zpět o {seektime} sekund',
        play: 'Přehrát',
        pause: 'Pozastavit',
        fastForward: 'Dopředu o {seektime} sekund',
        seek: 'Seek',
        played: 'Přehráno',
        buffered: 'Načteno',
        currentTime: 'Čas',
        duration: 'Délka',
        volume: 'Hlasitost',
        mute: 'Ztišit',
        unmute: 'Zrušit ztišení',
        enableCaptions: 'Zapnout titulky',
        disableCaptions: 'Vypnout titulky captions',
        enterFullscreen: 'Celá obrazovka',
        exitFullscreen: 'Vypnout režim celé obrazovky',
        frameTitle: 'Přehrávač pro {title}',
        captions: 'Titulky',
        settings: 'Nastavení',
        speed: 'Rychlost',
        normal: 'Původní',
        quality: 'Kvalita',
        loop: 'Smyčka',
        start: 'Začátek',
        end: 'Konec',
        all: 'Vše',
        reset: 'Reset',
        disabled: 'Vypnuto',
        enabled: 'Zapnuto',
        advertisement: 'Reklama'
    }
    const videoSrc = {
        type: props.type,
        sources: [
            {
                src: props.source,
                provider: props.provider
            }
        ]
    };
    return (
        <>
            <Plyr
                type={props.type}
                i18n={localization}
                source={videoSrc}
                options={{
                    i18n: localization,
                    disableContextMenu: false,
                    tooltips: { controls: true, seek: true },
                    captions: { active: false, language: 'auto', update: true },
                }}
            />
        </>
    );
}

