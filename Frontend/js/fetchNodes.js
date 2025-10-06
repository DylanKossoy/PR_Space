



export async function getNodes() {
    let url = '../data/Nodes.json'

    let options = {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json'
        }
    }



    let response = await fetch(url, options)

    if(response.status === 200) {
        let data = await response.json()
        console.log(data)
        return data
    } else {
        console.log(response.status);
    }
}
