import { Github } from '../../lv_1/Icons/SocialMedia/Github'
import Style from './ListOfGithubUrl.module.sass'

export interface GithubUrl {
    title: string
    url: string
}

interface ListOfGithubUrlI {
    listOfGithubUrl?: GithubUrl[]
}
export function ListOfGithubUrl(props: ListOfGithubUrlI) {
    const {
        listOfGithubUrl = [
            {
                title: 'Front - default',
                url: 'https://github.com/'
            },
            {
                title: 'Back - default',
                url: 'https://github.com/'
            }
        ]
    } = props

    return (
        <div className={Style.list}>
            {listOfGithubUrl.map((e) => (
                <Github
                    key={e.title}
                    title={e.title}
                    className={Style.project_github}
                    href={e.url}
                />
            ))}
        </div>
    )
}
