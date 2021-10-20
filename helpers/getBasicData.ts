import { mostSeenAPIRoute, postJsonRoute, tagJsonRoute } from '../config/routes'

export const getBasicData = async () => {
    const getListPosts = async () => {
        const respMultiPost = await fetch(postJsonRoute)
        const multiPost = await respMultiPost.json()
        return multiPost
    }

    const getListTags = async () => {
        const respListTags = await fetch(tagJsonRoute)
        const listTags = await respListTags.json()
        return listTags
    }

    const getMostSeen = async () => {
        const respMostSeen = await fetch(mostSeenAPIRoute)
        const mostSeen = await respMostSeen.json()
        return mostSeen.data ?? null
    }

    const [listPost, listTags, mostSeen] = await Promise.all([
        getListPosts(),
        getListTags(),
        getMostSeen()
    ])

    return {
        listPost,
        listTags,
        mostSeen
    }
}
