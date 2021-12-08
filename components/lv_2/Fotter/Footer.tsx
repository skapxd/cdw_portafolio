import Style from './Footer.module.sass'

interface FooterI {
    className?: string
}

export const Footer = (props: FooterI) => {
    const { className = '' } = props

    return (
        <footer className={`${Style.footer} ${className}`}>
            <div className={Style.footer_right}>
                2021 ©{' '}
                <b>
                    Skap<span className={Style.footer_right_x}>x</span>d.
                </b>{' '}
                All Right Reserved. Published with <b>Vercel</b>
            </div>
        </footer>
    )
}
