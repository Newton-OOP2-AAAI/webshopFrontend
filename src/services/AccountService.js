import axios from 'axios';

const ACCOUNTS_REST_API_URL = 'http://localhost:8080/account';

 class AccountService {

    getAccounts(){
        return axios.get(ACCOUNTS_REST_API_URL);
    }
}

export default new AccountService();