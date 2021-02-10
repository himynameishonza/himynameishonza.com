import React from 'react';
import '../../styles/global.scss';
import styles from './Page.scss';
import Facts from '../Facts';
import SideContent from '../SideContent';
import classnames from 'classnames';
import {HeroArticlePreview, FeaturedArticlePreview} from '../ArticlePreview';
export class Page extends React.Component {
    render() {
        return (
            <div className={classnames(styles['page'], styles['page--' + this.props.type])}>
                {this.props.type === 'homepage' && (
                    <>
                        <div className={styles['page__content']}>
                            <div className={styles['hero-article']}>
                                <HeroArticlePreview
                                    category="Knihy"
                                    title="Jana Ciglerová: Americký deník"
                                    link="/"
                                    excerpt="Dorazil mi balík víkendového čtiva z Deníku N. A jako první mi do ruky padla kniha mojí oblíbené novinářky Jany Ciglerové, která strávila spolu se svojí rodinou nezanedbatelnou část života ve Spojených státech a která své všední i nevšední zážitky zasílala do českých luhů a hájů ve formě deníkových záznamů. Ty pak před rokem vyšly jako sbírka Americký deník. Kniha obsahuje čtyřicet esejí, v každé z nich si potom Ciglerová vybírá jedno téma z každodenního života Čecha žijícího v Americe."
                                />
                            </div>

                            <div className={styles['featured-articles']}>
                                <FeaturedArticlePreview
                                    category="Film"
                                    title="The Upside"
                                    link="/"
                                    excerpt="Že se dívám na předělávku Nedotknutelných z roku 2011 mi došlo asi až po dvaceti minutách sledování. Název filmu na Prime Videu byl totiž The Upside, nikoliv Untouchables. Jakmile mi ale secvakly obvody, překvapivě jsem neměl chuť film vypnout. Že si Američané potrpí na remaky filmů a seriálů originální evropské produkce, je všeobecně známo. Zatímco například u seriálu The Office byla předělávka vcelku nasnadě, u Nedotknutelných to ale už tak pochopitelné není. "
                                />

                                <FeaturedArticlePreview
                                    category="Knihy"
                                    title="Josi Klein Halevi: Dopisy přes zeď"
                                    link="/"
                                    excerpt="Další rest splněn. Už delší dobu jsem hledal knihu o historii izraelsko-palestinského konfliktu, která by mi jednoduchou formou vysvětlila, v čem tkví hlavní problém tohoto nekonečného přetahování na Blízkém východě. Dopisy přes zeď jsou přesně tím, co jsem hledal."
                                />

                                <FeaturedArticlePreview
                                    category="Knihy"
                                    title="Hans Rosling: Faktomluva"
                                    link="/"
                                    excerpt="Knihu Faktomluva jsem si úmyslně šetřil na konec roku. Když jsem si někdy před měsícem naordinoval absolutní abstinenci od denního zpravodajství, hledal jsem alternativu. Rozečetl jsem skvělou knihu Dějiny USA (tu asi nechám bez recenze, recenzoval bych totiž spíš samotné dějiny USA, nikoliv knihu) a začal číst trochu víc beletrie. Faktomluvu jsem si nechal na čas po Vánocích, jelikož slibovala, že mi zvedne náladu. A zvedla!"
                                />
                            </div>

                            <div className={styles['side-content']}>
                                <Facts />
                                <SideContent />
                            </div>
                        </div>
                        <div className={styles['page__decoration']} />
                    </>
                )}
            </div>
        );
    }
}

export default Page;
