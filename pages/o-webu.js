import React from 'react';
import Layout from '../components/Layout';

const content = (
    <>
        <h3>Něco z histérie</h3>
        <p>
            Historie webu sahá do roku 2011, kdy byl spuštěn studentský online magazín iDetail.cz.
            Ten kvůli celkovému nezájmu (jak čtenářů, tak autorů) přežil pouhé dva roky. Autor potom
            zběhnul a jako autor a fotograf krátce pracoval pro časopis Reflex. V roce 2017 byl
            spuštěn blog Venku zase prší, který si už našel pravidelné čtenáře.
        </p>

        <h3>Technikálie a internety</h3>
        <p>
            Každý řádek kódu webu byl psán s láskou. Žádná část kódu nebyla ukradena, nebo
            překopírována ze Stack Overflow. Repozitář obsahuje celkem <b>35 004</b> řádku kódu, z
            toho 13 000 SCSS, 12 034 JavaScriptu, 1 293 JSONu a 232 řádků konfiguračních skriptů.
            Web běží na{' '}
            <a href="https://nextjs.org/" target="_blank">
                React frameworku Next.js
            </a>{' '}
            společnosti Vercel (dříve ZEIT). Administrace webu je potom řešena přes{' '}
            <a href="https://www.sanity.io/" target="_blank">
                headless CMS Sanity
            </a>
            . Hostování a deployment probíhá přes platformu{' '}
            <a href="https://vercel.com/" target="_blank">
                Vercel
            </a>
            . Web v současnosti nevyužívá žádný testovací framework, takže je velmi "bug friendly".
            Pokud na nějakého brouka narazíte, neváhejte mě kontaktovat na sociálních internetech.
        </p>

        <h3>Hlavní Knihovny</h3>
        <p>
            <b>react &amp; react-dom</b> - verze 17.0.1
            <br />
            <b>next</b> - verze 10.0.5
            <br />
            <b>node-sass</b> - verze 4.13.0
            <br />
            <b>react-spring</b> - verze 8.0.27
            <br />
            <b>sanity</b> - verze 2.2.3
            <br />
            <b>vercel</b> - verze 21.2.3
            <br />
            <b>webpack</b> - verze 4.41.2
            <br />
            <b>Ilustrace</b> - Eastwood by Icons8
            <br />
            <b>Ikony</b> - Icons8 &amp; Flat Icons
        </p>
        <h3>Copyright</h3>
        <p>
            Všechen textový obsah podléhá licenci{' '}
            <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">
                Creative Commons Attribution 4.0 International
            </a>
            : Sdílejte, upravujte, prodávejte, vždy ale uveďte zdroj.
        </p>
        <p>Licence zdrojového kódu je MIT, kód bude brzy ke stažení na stránkách GitHub</p>
        <p>
            Ostatní obsah (fotografie, ilustrace, ikony, audio a video) se řídí právy vlastníků
            obsahu.
        </p>
    </>
);

function OWebu(props) {
    return (
        <Layout
            type="info-page"
            title="O webu"
            slug="o-webu"
            description="Historie webu sahá do roku 2011, kdy byl spuštěn studentský online magazín iDetail.cz. Ten kvůli celkovému nezájmu (jak čtenářů, tak autorů) přežil pouhé dva roky. Autor potom zběhnul a jako autor a fotograf krátce pracoval pro časopis Reflex. V roce 2017 byl spuštěn blog Venku zase prší, který si už našel pravidelné čtenáře."
        >
            {content}
        </Layout>
    );
}
export default OWebu;
