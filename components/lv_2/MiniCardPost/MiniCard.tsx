import Link from 'next/link'
import { singlePostLink } from '../../../pages/post/[post]'

import { CardPostI } from '../../lv_3/CardPost/CardPost'
import { ListOfMiniTags } from '../ListOfMiniTags/ListOfTags'
import Style from './MiniCard.module.scss'

export const MiniCard = (props: CardPostI) => {
  const {
    id,
    tags,
    date,
    title,
    urlPost,
    favorite,
    urlImage,
    readingTime,
    shortDescription
  } = props

  return (
        <article className={Style.miniCard}>
            <Link href={singlePostLink(urlPost)}>
                <a>
                    <img
                        className={Style.miniCard_img}
                        src={urlImage}
                        alt={title}
                    />
                </a>
            </Link>
            <div className={Style.miniCard_info}>
                <div>
                    <span className={Style.miniCard_info_readingTime}>
                        {readingTime}
                    </span>{' '}
                    <span className={Style.miniCard_info_date}>{date}</span>
                </div>

                <Link href={singlePostLink(urlPost)}>
                    <a>
                        <h4 className={Style.miniCard_info_title}>{title}</h4>
                    </a>
                </Link>

                <ListOfMiniTags
                    tags={tags}
                    className={Style.miniCard_info_displayRow}
                />
            </div>
        </article>
  )
}
