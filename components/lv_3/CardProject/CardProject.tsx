import {
  GithubUrl,
  ListOfGithubUrl
} from '../../lv_2/ListOfGithubUrl/ListOfGithubUrl'
import Style from './CardProject.module.scss'

export interface CardProjectI {
    id: string
    title: string
    urlImage: string
    urlPost: string
    listOfGithubUrl?: GithubUrl[]
}
export function CardProject (props: CardProjectI) {
  const { title, urlImage, id, urlPost, listOfGithubUrl } = props

  return (
        <div key={id} className={Style.project}>
            <a
                target="_blank"
                href={urlPost}
                className={Style.project_bg}
                style={{ backgroundImage: `url(${urlImage})` }} rel="noreferrer"
            >
                <h2 className={Style.project_title}>{title}</h2>
                {/* <ListOfGithubUrl listOfGithubUrl={listOfGithubUrl} /> */}
                {/* </div> */}
            </a>
            <ListOfGithubUrl listOfGithubUrl={listOfGithubUrl} />
        </div>
  )
}
