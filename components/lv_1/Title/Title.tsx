import Style from './Title.module.sass'

interface TitleI {
    text: string
    className?: string
}
export const Title = (props: TitleI) => {
    const { text, className } = props

    return <h2 className={`${Style.title} ${className}`}>{text}</h2>
}
