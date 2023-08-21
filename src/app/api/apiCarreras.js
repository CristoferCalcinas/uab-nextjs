import infoCarreras from '@/data/infoCarreras.json'
export async function cargarJSON() {
    // const resp = await fetch('/data/infoCarreras.json')
    // const data = await resp.json()
    // console.log(resp)
    // console.log(infoCarreras)
    // console.log("first")
    return await infoCarreras;
}
