import Link from 'next/link'
import { tagLink } from '../../../pages/tag/[tag]'
import Style from './Tags.module.sass'

export interface TagsI {
    text: string
    className?: string
}
export const Tags = (props: TagsI) => {
    const { className, text } = props
    return (
        <Link href={tagLink(text)}>
            <a className={`${Style.tags} ${className}`}>{text}</a>
        </Link>
    )
}
