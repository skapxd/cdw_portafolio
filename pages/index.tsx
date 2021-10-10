import Style from './index.module.sass'
import Image from 'next/image'
import { ListOfCardPost } from '../components/ListOfCardPost/ListOfCardPost'
import { CardPostI } from '../components/CardPost/CardPost'

export default function Home() {
    const data: CardPostI[] = [
        {
            id: '1',
            favorite: false,
            date: 'Nov 12, 2020',
            readingTime: '2 min read',
            title: 'Believe and act as if it were impossible to fail',
            tags: ['Work', 'Notes'],
            urlPost: 'https://google.com',
            urlImage:
                'http://norlin.anvodstudio.com/content/images/2020/11/10.jpg',
            shortDescription:
                'Sin tantum modo ad indicia veteris memoriae cognoscenda, curiosorum. Haec et tu ita posuisti, et verba vestra sunt. Idemne potest esse dies sa'
        }
    ]

    return (
        <div className={Style.firtsScreen}>
            <div className={Style.firtsScreen_logo}>
                <Image src="/assets/logo.svg" height="50" width="150" />
            </div>
            <h1 className={Style.firtsScreen_titulo}>Desarrollo web y móvil</h1>

            <ListOfCardPost
                className={Style.firtsScreen_listOfCardPost}
                data={data}
            />
        </div>
    )
}
