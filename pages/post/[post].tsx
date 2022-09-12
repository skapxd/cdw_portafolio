import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { CardPostI } from "../../components/lv_3/CardPost/CardPost";
import { ListOfTags } from "../../components/lv_2/ListOfTags/ListOfTags";
import { Layout } from "../../components/lv_5/Layout/Layout";
import { getBasicData } from "../../helpers/getBasicData";
import { getSinglePost } from "../../helpers/getSinglePost";

import Style from "./[post].module.scss";
import MarkDownStyle from "../../styles/_markdown.module.sass";
import Image from "next/image";

export async function getStaticPaths(props: any) {
  const getPaths = async () => {
    const { listPost } = getBasicData();
    const paths = listPost.map((e) => ({
      params: { post: e.urlPost },
    }));
    return paths;
  };

  const paths = await getPaths();
  return { paths, fallback: false };
}

export async function getStaticProps(props: any) {
  const { params } = props;

  const { listTags, mostSeen } = getBasicData();
  const { metaData, markDown } = await getSinglePost(params.post);

  return {
    props: {
      mostSeen,
      listTags,
      metaData,
      markDown,
    },
  };
}

export const singlePostLink = (post: string) => `/post/${post}`;

interface PostI {
  metaData: CardPostI;
  mostSeen: CardPostI[];
  listTags: string[];
  markDown: string;
}

export default function Post(props: PostI) {
  const { metaData, listTags, mostSeen, markDown } = props;

  const { date, tags, title, shortDescription, urlImage, readingTime } =
    metaData;

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
              <img className={Style.post_imgMain} src={urlImage} alt="" />
            </div>

            <div className={Style.post_column}>
              <div className={Style.post_boxReadTimeAndDate}>
                <span className={Style.post_readTime}>{readingTime} </span>
                <span className={Style.post_date}>{date}</span>
              </div>

              <h2 className={Style.post_title}>{title}</h2>
              <ListOfTags tags={tags} className={Style.post_listOfTags} />
            </div>
          </div>

          <ReactMarkdown
            className={MarkDownStyle.markDown}
            components={{
              a: ({ node, ...props }) => {
                return <a target="_blank" {...props}></a>;
              },
              pre: ({ node, ...props }) => {
                return <pre {...props}></pre>;
              },
            }}
          >
            {markDown}
          </ReactMarkdown>
        </div>
      </Layout>
    </>
  );
}
