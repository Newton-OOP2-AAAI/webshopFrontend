import axios from 'axios'
//import React from 'react';

const PRODUCTS_REST_API_URL = 'http://localhost:8080/product';

class ProductService {

    getEmployees(){
        return axios.get(PRODUCTS_REST_API_URL);
    }
}

export default new ProductService();