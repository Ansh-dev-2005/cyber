const URL = "http://localhost:8000"

export const getMenu = async () => {

    try {
        const get = await fetch(`${URL}/menu/`)
        const menu = await get.json()
        return menu
    }catch(err) {
        return err
    }
}