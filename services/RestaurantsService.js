import { BaseService } from "./BaseService";

export default class RestaurantsService extends BaseService {
    static getByCategory(category) {
        return fetch(`${BaseService.apiUrl}/restaurants?category=${category}`).then(res=> res.json())
    }
    static getCategories() {
        return BaseService.get('categories')
    }
}