import { BaseService } from "./BaseService";

export default class RestaurantsService extends BaseService {
    static getByCategory(category) {
        return fetch(`${BaseService.apiUrl}/company?type=${category}`)
            .then(res => {
                if (res.status !== 200) throw new Error(`${category} restaurant was not found`)
                return res.json()
            })
    }

    static getRestaurantDishes(companyId) {
        return fetch(`${BaseService.apiUrl}/company/${companyId}/products`)
            .then(res => {
                if (res.status !== 200) throw new Error(`restaurant dishes was not found`)
                return res.json()
            })
            .then(res => {
                return res.map(r => {
                    r.price = parseFloat(r.price)
                    return r
                })
            })
    }

    static getCategories() {
        return BaseService.get('category')
    }
}