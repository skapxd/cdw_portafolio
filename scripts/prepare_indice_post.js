const { readMarkdown } = require('node-md-meta-cataloger')
const fs = require('fs')

async function main() {
    const dir = (detail = '') => `public/post/md/${detail}`

    const listOfMD = fs.readdirSync(dir())

    const dataAsync = listOfMD.map((e) => {
        const md = readMarkdown(dir(e))
        return md
    })

    const data = await Promise.all(dataAsync)

    const metadata = data.map((e) => {
        return e.meta
    })

    fs.writeFileSync(
        'public/post/indice_de_posts.json',
        JSON.stringify(metadata)
    )
}

main()
