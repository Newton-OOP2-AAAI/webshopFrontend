import axios from 'axios';

const CARTS_REST_API_URL = 'http://localhost:8080/carts';

 class CartService {
    
    // You could keep the cart over refresh by saving the cart items
    // into localstorage and then load them in the constructor.
    constructor() {
        this.items = [];
    }
    
    remove(product) {        
        this.items.splice(this.items.indexOf(product), 1);
    }

    add(product) {
        this.items.push(product);
    }

    getCarts(){
        return axios.get(CARTS_REST_API_URL);
    }

    getCurrentCart() {
        return this;
    }
}

const cartService = new CartService();

export default cartService;