import Style from './CardProject.module.sass'
import { Github } from '../../lv_1/Icons/SocialMedia/Github'
import {
    GithubUrl,
    ListOfGithubUrl
} from '../../lv_2/ListOfGithubUrl/ListOfGithubUrl'

export interface CardProjectI {
    id: string
    title: string
    urlImage: string
    urlPost: string
    listOfGithubUrl?: GithubUrl[]
}
export function CardProject(props: CardProjectI) {
    const { title, urlImage, id, urlPost, listOfGithubUrl } = props

    return (
        <article key={id} className={Style.project}>
            <a href={urlPost}>
                <div
                    className={Style.project_bg}
                    style={{ backgroundImage: `url(${urlImage})` }}
                >
                    <h2 className={Style.project_title}>{title}</h2>
                </div>
            </a>

            <ListOfGithubUrl listOfGithubUrl={listOfGithubUrl} />
        </article>
    )
}
