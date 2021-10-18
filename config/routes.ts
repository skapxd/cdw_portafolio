export const postJsonRoute = 'http://localhost:3000/post.json'
export const tagJsonRoute = 'http://localhost:3000/tags.json'

export const postAPIRoute = (param: string) => {
    return `http://localhost:3000/api/posts/${param}`
}

export const tagAPIRouter = (param: string) => {
    return `http://localhost:3000/api/tags/${param}`
}
