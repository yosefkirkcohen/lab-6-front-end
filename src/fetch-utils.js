import request from "superagent";

export async function getPlayer(id) {
    const player = await request.get(`https://lab-06b.herokuapp.com/chessplayers/${id}`)
    return player.body;
}

export async function getCategories() {
    const categories = await request.get('https://lab-06b.herokuapp.com/categories')
    return categories.body;
}

export async function createPlayer(player) {
    const response = await request.post('https://lab-06b.herokuapp.com/chessplayers')
        .send(player)
        return response.body;
}

export async function editPlayer(id, newPlayer) {
    const response = await request.put(`https://lab-06b.herokuapp.com/chessplayers/${id}`)
        .send(newPlayer)
        return response.body;
}

export async function deletePlayer(id) {
    const response = await request.delete(`https://lab-06b.herokuapp.com/chessplayers/${id}`)
    return response.body;
}
