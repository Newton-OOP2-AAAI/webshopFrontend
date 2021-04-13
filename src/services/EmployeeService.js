import axios from 'axios'
//import React from 'react';

const EMPLOYEES_REST_API_URL = 'http://localhost:8080/employees';


 class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEES_REST_API_URL + '/all');
    }

    getEmployee(id) {
        return axios.get(EMPLOYEES_REST_API_URL + '/' + id);
    }

}


export default new EmployeeService();