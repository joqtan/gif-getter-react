export const getGif = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
        category
    )}&limit=5&api_key=2UaWNRO3gfbTk5hboWcAgvbIJQeIwLLL`
    const response = await fetch(url)
    const { data } = await response.json()
    const gif = data.map(({ id, title, images }) => {
        return {
            id,
            title,
            url: images.downsized_medium.url,
        }
    })
    return gif
}
