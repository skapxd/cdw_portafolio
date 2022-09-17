import { Github } from "../../lv_1/Icons/SocialMedia/Github";
import { Telegram } from "../../lv_1/Icons/SocialMedia/Telegram";
import { Title } from "../../lv_1/Title/Title";
import Style from "./SocialMedia.module.scss";
import { Mail } from "../../lv_1/Icons/SocialMedia/Mail";
import { FC } from "react";
import Link from "next/link";

interface Props {
  className?: string;
}

interface SocialMediaI {
  icon: FC;
  text: string;
  link: string;
}

export const SocialMedia = (props: Props) => {
  const socialMedias: Array<SocialMediaI> = [
    {
      icon: () => <Telegram />,
      text: "@skapxd",
      link: "https://t.me/skapxd",
    },
    {
      icon: () => <Github />,
      text: "github.com/skapxd",
      link: "https://github.com/skapxd",
    },
    {
      icon: () => <Mail />,
      text: "hola@skapxd.dev",
      link: "mailto:hola@skapxd.dev",
    },
  ];

  const { className = "" } = props;

  const Elements = () => (
    <>
      {socialMedias.map((E) => (
        <Link href={E.link}>
          <a key={E.text} className={Style.socialMedia_group} target="_blanc">
            <E.icon />
            <p className={Style.socialMedia_group_text}>{E.text}</p>
          </a>
        </Link>
      ))}
    </>
  );

  return (
    <div className={`${Style.socialMedia} ${className}`}>
      <Title text="Contacto" className={Style.socialMedia_title} />

      <div className={Style.socialMedia_listLink}>
        <Elements />
      </div>
    </div>
  );
};
