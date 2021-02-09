import React from 'react';
import * as IllustrationSvg from './illustrations';

const Illustration = (props) => {
    const IllustrationComponent = IllustrationSvg[props.illustration];

    return (
        <>
            {IllustrationComponent ? <IllustrationComponent /> : <span>No SVG</span>}
        </>
    );
};

export default Illustration;