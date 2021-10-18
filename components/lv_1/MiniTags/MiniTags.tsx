import { TagsI } from '../Tags/Tags'
import Style from './MiniTags.module.sass'

export const MiniTags = (props: TagsI) => {
    const { className, text } = props
    return (
        <div id={text} className={`${Style.miniTags} ${className}`}>
            {text}
        </div>
    )
}
