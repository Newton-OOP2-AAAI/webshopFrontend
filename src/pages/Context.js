import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
const ProductContext = React.createContext();
class ProductProvider extends Component {
    state= {
        products:EmployeeService
    }
    handleDetail = ()=>{
        console.log('hello from deets');
    }
    addToCart = () =>{
console.log('hello from add to cart');
    }
    render() {
        return (
            <ProductContext.Provider value={{

                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}


const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};