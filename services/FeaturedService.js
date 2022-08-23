import { BaseService } from './BaseService'

class FeaturedService extends BaseService {
    static getAll() {
        return BaseService.get('featured')
    }
}

export default FeaturedService