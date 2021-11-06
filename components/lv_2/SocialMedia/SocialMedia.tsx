import { Github } from '../../lv_1/Icons/SocialMedia/Github'
import { Telegram } from '../../lv_1/Icons/SocialMedia/Telegram'
import { Title } from '../../lv_1/Title/Title'
import Style from './SocialMedia.module.sass'

interface SocialMediaI {
    className?: string
}
export const SocialMedia = (props: SocialMediaI) => {
    const { className = '' } = props

    return (
        <div className={`${Style.socialMedia} ${className}`}>
            <Title text="Redes sociales" className={Style.socialMedia_title} />

            <div className={Style.socialMedia_listLink}>
                <Telegram />
                <Github />
            </div>
        </div>
    )
}
