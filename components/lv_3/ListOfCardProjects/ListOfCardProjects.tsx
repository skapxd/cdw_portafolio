import { CardProject, CardProjectI } from '../CardProject/CardProject'

interface ListOfCardProjectsI {
    list: CardProjectI[]
    className?: string
}

export function ListOfCardProjects(props: ListOfCardProjectsI) {
    const { list, className } = props

    return (
        <div className={className}>
            {list?.map((e) => (
                <CardProject
                    listOfGithubUrl={e.listOfGithubUrl}
                    key={e.id}
                    urlPost={e.urlPost}
                    urlImage={e.urlImage}
                    id={e.id}
                    title={e.title}
                />
            ))}
        </div>
    )
}
