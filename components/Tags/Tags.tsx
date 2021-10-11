import Style from './Tags.module.sass'

interface TagsI {
    text: string
    className?: string
}
export const Tags = (props: TagsI) => {
    const { className, text } = props
    return <div className={`${Style.tags} ${className}`}>{text}</div>
}
