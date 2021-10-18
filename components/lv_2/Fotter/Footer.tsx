import { Github } from '../../lv_1/Icons/Github'
import { Telegram } from '../../lv_1/Icons/Telegram'
import Style from './Footer.module.sass'

export const Footer = () => {
    return (
        <footer className={Style.footer}>
            <div className={Style.footer_socialMedia}>
                <Telegram />
                <Github />
            </div>
            <div className={Style.footer_right}>
                2021 ©{' '}
                <b>
                    Skap<span className={Style.footer_right_x}>x</span>d.
                </b>{' '}
                All Right Reserved. Published with <b>GCP</b>
            </div>
        </footer>
    )
}