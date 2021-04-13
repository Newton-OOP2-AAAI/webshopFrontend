import Axios from 'axios';

const EmployeeAPI = Axios.create({
    baseURL: 'http://localhost:8080/employees/all'
})

export default EmployeeAPI