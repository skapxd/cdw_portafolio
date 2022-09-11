import { Github } from '../../lv_1/Icons/SocialMedia/Github'
import { Telegram } from '../../lv_1/Icons/SocialMedia/Telegram'
import { Title } from '../../lv_1/Title/Title'
import Style from './SocialMedia.module.scss'
import { Mail } from '../../lv_1/Icons/SocialMedia/Mail'

interface Props {
  className?: string
}

interface SocialMediaI {
  icon: JSX.Element
  text: string
  link: string
}

export const SocialMedia = (props: Props) => {
  const socialMedias: Array<SocialMediaI> = [
    {
      icon: <Telegram />,
      text: '@skapxd',
      link: 'https://t.me/skapxd'
    },
    {
      icon: <Github />,
      text: 'github.com/skapxd',
      link: 'https://github.com/skapxd'
    },
    {
      icon: <Mail />,
      link: 'mailto:hola@skapxd.dev',
      text: 'hola@skapxd.dev'
    }
  ]

  const Element = () => <div>

  </div>

  const { className = '' } = props

  return (
    <div className={`${Style.socialMedia} ${className}`}>
      <Title text="Redes sociales" className={Style.socialMedia_title} />

      <div className={Style.socialMedia_listLink}>
        <Github />
      </div>
    </div>
  )
}
