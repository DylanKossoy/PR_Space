




export async function getLevels() {

    let url = '../data/Levels.json'


    let options = {
        method: 'GET',
        headers: {
            "Content-Type" : "application/json"
        }
    }


    let response = await fetch(url, options);


    if(response.status === 200) {
        let data = await response.json()
        return data;
    } else {
        console.log(response.status)
    }



    
}