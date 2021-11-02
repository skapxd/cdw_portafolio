interface ReturnJsonFileI {
    mostSeen: string
    post: string
    tags: string
}

export default function jsonFile(): ReturnJsonFileI {
    const fsMostSeen = 'public/most_seen.json'
    const fsPost = 'public/post/indice_de_posts.json'
    const fsTags = 'public/tags.json'

    return {
        mostSeen: fsMostSeen,
        post: fsPost,
        tags: fsTags
    }
}
