import axios from 'axios';

const CARTS_REST_API_URL = 'http://localhost:8080/carts';

 class CartService {

    getCarts(){
        return axios.get(EMPLOYEES_REST_API_URL);
    }
}

export default new CartService();