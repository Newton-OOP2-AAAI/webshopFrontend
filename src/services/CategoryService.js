import axios from 'axios';

const CATEGORY_REST_API_URL = 'http://localhost:8080/products/categories';

 class CategoryService {

    getCategories(){
        return axios.get(CATEGORY_REST_API_URL + '/all');
    }

    getSpecificCategories(){
        return axios.get(CATEGORY_REST_API_URL + '/id?=' + id);
    }
}

export default new CategoryService();