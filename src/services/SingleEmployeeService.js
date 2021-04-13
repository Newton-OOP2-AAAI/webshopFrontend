import axios from 'axios'


const SINGLE_EMPLOYEE_REST_API_URL = 'http://localhost:8080/employees?id=95cd74da-e520-4251-bab5-9bf52a0a7aae';


 class SingleEmployeeService {


    getEmployee(){
        return axios.get(SINGLE_EMPLOYEE_REST_API_URL);
    }
}



export default new SingleEmployeeService();