interface ReturnStaticImageI {
    favicon: string
    logo: string
    perfil: string
}

export default function staticImage(): ReturnStaticImageI {
    const favicon = '/assets/logo.svg'
    const logo = '/assets/logo.svg'
    const perfil = '/assets/perfil.jpg'
    // const perfil = '/assets/placeholder.png'

    return {
        favicon,
        logo,
        perfil
    }
}
