import { BaseService } from "./BaseService";

export default class RestaurantsService extends BaseService {
    static getByCategory(category) {
        return fetch(`${BaseService.apiUrl}/restaurants_${category}`).then(res=> res.json())
    }
    static getCategories() {
        return BaseService.get('categories')
    }
}