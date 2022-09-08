const API_URL = 'http://localhost:3000'

export class BaseService {
    static get apiUrl() {
        return API_URL
    }
    static get(path) {
        return fetch(`${API_URL}/${path}`).then(res=> res.json())
    }

    static onError(err) {
        if(err.status === 404) console.log('Err>>>> ', err)
    }
}