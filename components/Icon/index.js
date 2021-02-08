import * as React from 'react';
import styles from './Icon.scss';
import classnames from 'classnames';

const Icon = ({icon, size, color}) => {
    let iconStr;

    switch (icon) {
        case 'logo':
            iconStr =
                'm12 0c6.627417 0 12 5.372583 12 12s-5.372583 12-12 12-12-5.372583-12-12 5.372583-12 12-12zm.9692308 13.0769231h-1.9384616c-.3568609 0-.6461538.2946502-.6461538.6581196v4.6068376c0 .3634695.2892929.6581197.6461538.6581197h1.9384616c.3568609 0 .6461538-.2946502.6461538-.6581197v-4.6068376c0-.3634694-.2892929-.6581196-.6461538-.6581196zm5.3846154-5.34615387h-1.9384616c-.3568609 0-.6461538.31274912-.6461538.6985447v7.21829517c0 .3857956.2892929.6985447.6461538.6985447h1.9384616c.3568609 0 .6461538-.3127491.6461538-.6985447v-7.21829517c0-.38579558-.2892929-.6985447-.6461538-.6985447zm-10.76923082 0h-1.93846153c-.35686092 0-.64615385.31274912-.64615385.6985447v7.21829517c0 .3857956.28929293.6985447.64615385.6985447h1.93846153c.35686092 0 .64615385-.3127491.64615385-.6985447v-7.21829517c0-.38579558-.28929293-.6985447-.64615385-.6985447zm5.38461542-2.73076923h-1.9384616c-.3568609 0-.6461538.29465021-.6461538.65811966v4.60683764c0 .3634694.2892929.6581196.6461538.6581196h1.9384616c.3568609 0 .6461538-.2946502.6461538-.6581196v-4.60683764c0-.36346945-.2892929-.65811966-.6461538-.65811966z';
            break;
        case 'back':
            iconStr =
                'm12.5240485 3.39749794c.6280597.52453336.6345345 1.37161015.0194245 1.90279389l-.0194245.01649594-6.8050485 5.68321223h16.6574706c.8966505 0 1.6235294.6715729 1.6235294 1.5 0 .8201429-.712414 1.4865529-1.5966814 1.499799l-.026848.000201h-16.6574706l6.8050485 5.6832122c.6280597.5245334.6345345 1.3716102.0194245 1.9027939l-.0194245.016496c-.6280597.5245333-1.6423227.5299409-2.2783453.0162226l-.0197517-.0162226-9.75000002-8.1428572c-.62805969-.5245333-.63453453-1.3716101-.01942453-1.9027939l.01942453-.0164959 9.75000002-8.14285716c.634602-.52999725 1.663495-.52999725 2.298097 0z';
            break;
        case 'menu':
            iconStr =
                'm22.5 19c.8284271 0 1.5.6715729 1.5 1.5s-.6715729 1.5-1.5 1.5h-21c-.82842712 0-1.5-.6715729-1.5-1.5s.67157288-1.5 1.5-1.5zm0-8c.8284271 0 1.5.6715729 1.5 1.5s-.6715729 1.5-1.5 1.5h-21c-.82842712 0-1.5-.6715729-1.5-1.5s.67157288-1.5 1.5-1.5zm0-8c.8284271 0 1.5.67157288 1.5 1.5s-.6715729 1.5-1.5 1.5h-21c-.82842712 0-1.5-.67157288-1.5-1.5s.67157288-1.5 1.5-1.5z';
            break;
        default:
            iconStr = '';
    }

    return (
        <svg viewBox="0 0 24 24" className={styles['icon']} width={size} height={size}>
            <path d={iconStr}></path>
        </svg>
    );
};

export default Icon;
