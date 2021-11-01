import Head from 'next/head'
import ReactMarkdown from 'react-markdown'

import { CardPostI } from '../../components/lv_3/CardPost/CardPost'
import { ListOfTags } from '../../components/lv_2/ListOfTags/ListOfTags'
import { Layout } from '../../components/lv_5/Layout/Layout'
import MarkDownStyle from '../../styles/_markdown.module.sass'
import { getBasicData } from '../../helpers/getBasicData'

import Style from './[post].module.sass'
import { getSinglePost } from '../../helpers/getSinglePost'

export async function getStaticPaths(props: any) {
    const getPaths = async () => {
        const { listPost } = getBasicData()
        const paths = listPost.map((e) => ({
            params: { post: e.urlPost }
        }))
        return paths
    }

    const paths = await getPaths()
    return { paths, fallback: false }
}

export async function getStaticProps(props: any) {
    const { params } = props

    const { listTags, mostSeen } = getBasicData()
    const { metaData, markDown } = getSinglePost(params.post)

    return {
        props: {
            mostSeen,
            listTags,
            metaData,
            markDown
        }
    }
}

interface PostI {
    metaData: CardPostI
    mostSeen: CardPostI[]
    listTags: string[]
    markDown: string
}

export default function Post(props: PostI) {
    const { metaData: singlePost, listTags, mostSeen, markDown } = props

    const {
        date,
        tags,
        title,
        shortDescription,
        urlImage,
        favorite,
        id,
        readingTime,
        urlPost
    } = singlePost

    const post = `
Sin tantum modo ad indicia veteris memoriae cognoscenda, curiosorum. Haec et tu ita posuisti, et verba vestra sunt. Idemne potest esse dies saepius, qui semel fuit? Ampulla enim sit necne sit, quis non iure optimo irrideatur, si laboret? Ego vero volo in virtute vim esse quam maximam; Serpere anguiculos, nare anaticulas, evolare merulas, cornibus uti videmus boves, nepas aculeis. Conferam tecum, quam cuique verso rem subicias. Si longus, levis ampulla enim sit necne vel omnia vel partes genere plurima et maxima.

> The longer I live, the more I realize that I am never wrong about anything, and that all the pains I have so humbly taken to verify my notions have only wasted my time!

In qua quid est boni praeter summam voluptatem, et eam sempiternam? Cur post Tarentum ad Archytam? Qua ex cognitione facilior facta est investigatio rerum occultissimarum. Negat enim tenuissimo victu, id est contemptissimis escis et potionibus, minorem voluptatem percipi quam rebus exquisitissimis ad epulandum. Non enim iam stirpis bonum quaeret, sed animalis. Qui autem esse poteris, nisi te amor ipse ceperit? Sic igitur in homine perfectio ista in eo potissimum, quod est optimum, id est in virtute, laudatur. Natura sic ab iis investigata est, ut nulla pars caelo, mari, terra, ut poëtice loquar, praetermissa sit; Eadem nunc mea adversum te oratio est. Mihi quidem Homerus huius modi quiddam vidisse videatur in iis, quae de Sirenum cantibus finxerit potionibus.

###### ![](/assets/placeholder_post.jpg)

_Workplace / [Unsplash](https://unsplash.com/)_

Sic igitur in homine perfectio ista in eo potissimum, quod est optimum, id est in virtute, laudatur. Natura sic ab iis investigata est, ut nulla pars caelo, mari, terra, ut poëtice loquar, praetermissa sit. Eadem nunc mea adversum te oratio est. Mihi quidem Homerus huius modi quiddam vidisse videatur in iis, quae de Sirenum cantibus finxerit. Neque enim disputari sine reprehensione nec cum iracundia aut pertinacia recte disputari potest. An, partus ancillae sitne in fructu habendus, disseretur inter principes civitatis. Put in geometria, prima si dederis, danda sunt omnia. Longum est enim ad omnia respondere.

Qua ex cognitione facilior facta est investigatio rerum occultissimarum. Negat enim tenuissimo victu, id est contemptissimis escis et potionibus, minorem voluptatem percipi quam rebus exquisitissimis ad epulandum. Non enim iam stirpis bonum quaeret, sed animalis. Qui autem esse poteris, nisi te amor ipse ceperit? Sic igitur in homine perfectio ista in eo potissimum, quod est optimum, id est in virtute, laudatur disputari sine.

Sin tantum modo ad indicia veteris memoriae cognoscenda, curiosorum. Haec et tu ita posuisti, et verba vestra sunt. Idemne potest esse dies saepius, qui semel fuit? Ampulla enim sit necne sit, quis non iure optimo irrideatur, si laboret? Ego vero volo in virtute vim esse quam maximam; Serpere anguiculos, nare anaticulas, evolare merulas, cornibus uti videmus boves, nepas aculeis. Archytam? Qua ex cognitione facilior facta est investiga.
`

    return (
        <>
            <Head>
                <meta property="og:locale" content="es_ES" />
                <meta property="og:title" content={title} />
                <meta property="og:image" content={urlImage} />
                <meta property="og:description" content={shortDescription} />
                <meta property="og:site_name" content="skapxd.dev" />
            </Head>
            <Layout mostSeen={mostSeen} listOfTags={listTags}>
                <div className={Style.post}>
                    <div className={Style.post_presentation}>
                        <div className={Style.post_boxImgMain}>
                            <img
                                className={Style.post_imgMain}
                                src={urlImage}
                                alt=""
                            />
                        </div>

                        <div className={Style.post_column}>
                            <div className={Style.post_boxReadTimeAndDate}>
                                <span className={Style.post_readTime}>
                                    {readingTime}{' '}
                                </span>
                                <span className={Style.post_date}>{date}</span>
                            </div>

                            <h2 className={Style.post_title}>{title}</h2>
                            <ListOfTags
                                tags={tags}
                                className={Style.post_listOfTags}
                            />
                        </div>
                    </div>

                    <ReactMarkdown
                        className={MarkDownStyle.markDown}
                        children={markDown}
                    />
                </div>
            </Layout>
        </>
    )
}

export function postLink(post: string) {
    return `/post/${post}`
}
