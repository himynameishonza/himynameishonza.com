import React from 'react';
import Layout from '../components/Layout';

const content = (
    <>
        <h2>Cookies</h2>
        <h3>Základní informace a ustanovení</h3>
        <p>Na základě § 89 zákona č. 127/2005 Sb., o elektronických komunikacích, bychom vás rádi informovali, že naše webové stránky využívají tzv. cookies, tedy malé textové soubory, které si naše webové stránky uloží do vašeho počítače. Díky cookies zaznamenává webová stránka informace o vaší návštěvě, například informace o preferovaném jazyce a jiných nastaveních. Příští vaše návštěva této stránky tak může být mnohem jednodušší.</p>
        <p>Tyto soubory cookie umožňují našemu webu zapamatovat si informace, které mají vliv na vzhled nebo chování webu (např. o preferovaný jazyk). </p>
        <p>Při každé návštěvě našich stránek si analytický software ukládá anonymní cookies. Ty zjišťují, kolik uživatelů chodí na naše stránky opakovaně. Lépe tak chápeme, jak se zde uživatelé chovají, co preferují a co je zajímá. K těmto účelům využíváme mj. nástroj Google Analytics. Podrobnosti o tomto nástroji naleznete na jejich oficiálním webu. Tyto informace nijak nepropojujeme s jinými informacemi. Víme tedy například, že naši stránku navštíví opakovaně několik tisíc lidí za měsíc. Nevíme ale jmenovitě, o které uživatele se jedná.</p>

        <h3>Jaké cookies web ukládá?</h3>
        <p><b>cookiesSaved</b> - pro uložení hlavní cookie</p>
        <p><b>theme</b> - pro uložení vámi preferovaného barevného schématu</p>
        <p><b>markRead</b> - pro uložení nastavení označování přečteného obsahu</p>
        <p><b>sharing</b> - pro uložení nastavení možností sdílení přečteného obsahu</p>

        <h2>Uchování emailové adresy</h2>
        <h3>Základní informace a ustanovení</h3>
        <p>Na základě § 89 zákona č. 127/2005 Sb., o elektronických komunikacích, bychom vás rádi informovali, že naše webové stránky využívají tzv. cookies, tedy malé textové soubory, které si naše webové stránky uloží do vašeho počítače. Díky cookies zaznamenává webová stránka informace o vaší návštěvě, například informace o preferovaném jazyce a jiných nastaveních. Příští vaše návštěva této stránky tak může být mnohem jednodušší.</p>
    </>
)


function GDPR(props) {
    return (
        <Layout type="info-page" title="GDPR &amp; Cookies">{content}</Layout>
    )
}
export default GDPR;