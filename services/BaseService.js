const API_URL = 'http://localhost:4000'

export class BaseService {
    static get apiUrl() {
        return API_URL
    }
    static get(path) {
        return fetch(`${API_URL}/${path}`).then(res=> res.json())
    }
}