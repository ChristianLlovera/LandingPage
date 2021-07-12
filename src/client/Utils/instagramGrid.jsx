const fetch = require("node-fetch");

const IgGrid = {}

IgGrid.getItem = async (id) => {
    const response = await fetch(`https://graph.instagram.com/${id}?fields=media_url,permalink&access_token=IGQVJXM1ZAZASjU0bk4zX0hYaXo1NG9LQVNqSXRDS05fbWlPSU9XUE5KT1RfdHUzZAlU5LWRJQWVqcldLQ213UjhFeU9zSnc0Sm5SZA0RvTDBITjZAaeTZAiRi1RVXZAGSThjcGNBT1RfNEE0cllqX19PcEJaLQZDZD`)
    let data = await response.json()
    data = [data.media_url, data.permalink]
    return data
}

IgGrid.getList = async () => {
    const response = await fetch('https://graph.instagram.com/17841436044987683?fields=media&access_token=IGQVJXM1ZAZASjU0bk4zX0hYaXo1NG9LQVNqSXRDS05fbWlPSU9XUE5KT1RfdHUzZAlU5LWRJQWVqcldLQ213UjhFeU9zSnc0Sm5SZA0RvTDBITjZAaeTZAiRi1RVXZAGSThjcGNBT1RfNEE0cllqX19PcEJaLQZDZD')
    let data = await response.json()
    data = data.media.data
    return data
}

IgGrid.getUrl = async () => {

    let list = await IgGrid.getList()
    list = list.slice(0, 9)
    return Promise.all(list.map(val => IgGrid.getItem(val.id)))

}

export default IgGrid