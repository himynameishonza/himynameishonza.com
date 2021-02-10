import React from 'react';
import styles from './SideContent.scss';
import {SidecarArticlePreview} from '../ArticlePreview';
export class SideContent extends React.Component {
    render() {
        return (
            <section className={styles['side-content']} aria-label="Sekce Venku zase prší">
                <h3 className={styles['text--no-margin']}>Venku zase prší</h3>
                <SidecarArticlePreview
                    title="Třicet pět"
                    excerpt="U Glaubiců je plno. Bouřka zahnala půlku města do hospod. Pracuju s Honzou na třetím půllitru prazdroje a bavíme se o tom, jak se daří Rodenovi v jeho roli terepeuta Pošty. Přichází Martin. Ani si nesundal bundu a už vytahuje novinky z bulváru."
                    link="/"
                />

                <SidecarArticlePreview
                    title="Třicet čtyři"
                    excerpt="Cestu dvojkou z Podolí mám rád. Ne vždycky. Někdy jí rád nemám, někdy totiž stojí za hovno. Ale některý věci v životě prostě jednou za čas stojej za hovno. Na Kublově je prázdno. Jsem jedinej na zastávce. Ve vzduchu je cejtit jaro. Jaro a Staropramen."
                    link="/"
                />

                <SidecarArticlePreview
                    title="Třicet tři"
                    excerpt="Sněží. Vypadá to ale, že většina ostatních lidí takovýhle strach a nejistotu téměř nepociťuje. Když dostanou příležitost, pokoušejí se o sobě povídat překvapivě otevřeně. Řeknou vám třeba „Já hraju vždycky tak fér a na rovinu, až je to málem o strach.”, nebo „Mně vždycky všichni snadno ublíží a neumím vycházet s lidma,”"
                    link="/"
                />

                <SidecarArticlePreview
                    title="Třicet dva"
                    excerpt="Po měsíci si už zvykám na prázdninovej provoz. Na Bělohorský jsou ještě vidět zbytky kaluží z noční průtrže, teplota už ale zase lízá třicítku. Klimatizovaná ForCity. Spolu s bublinkovou fólií považuju klimatizaci za jeden z nejlepších vynálezů lidstva."
                    link="/"
                />
            </section>
        );
    }
}

export default SideContent;
