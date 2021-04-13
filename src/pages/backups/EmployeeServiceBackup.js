import axios from 'axios'
//import React from 'react';

const EMPLOYEES_REST_API_URL = 'http://localhost:8080/employees/all';

 class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEES_REST_API_URL);
    }
}

export default new EmployeeService();