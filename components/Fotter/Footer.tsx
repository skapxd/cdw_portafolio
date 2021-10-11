import React from 'react'
import { Telegram } from '../Icons/Telegram'
import Style from './Footer.module.sass'

export const Footer = () => {
    return (
        <footer className={Style.footer}>
            <Telegram href="https://t.me/skapxd" />
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
