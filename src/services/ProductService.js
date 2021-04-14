import axios from 'axios'

const PRODUCTS_REST_API_URL = 'http://localhost:8080/products';

class ProductService {

    getProducts(){
        return axios.get(PRODUCTS_REST_API_URL);
    }

    getProductsInCategory(categoryId) {
        return axios.get(PRODUCTS_REST_API_URL + '/filter/?categoryId=' + categoryId);
    }

    getCategories(){
        return axios.get(PRODUCTS_REST_API_URL + '/categories');
    }
    getProduct(id){
        return axios.get(PRODUCTS_REST_API_URL + '/?id=' + id);
    }

}

export default new ProductService();