import React, { Component } from 'react';
import EmployeeService from '../../services/EmployeeService';
const ProductContext = React.createContext();
class ProductProvider extends Component {
    state= {
        products: [],
        EmployeeService: EmployeeService
    };
    componentDidMount(){
        this.setProducts();
    }
    setProducts = () => {
        let products = [];
      // EmployeeService = JSON.parse(EmployeeService);
        {this.state.products.map(item => {
        const singleItem = {...item};
        products = [...products,singleItem];
    })};
    this.setState(() =>{
    return {products:products}
    });

    };
    /* handleDetail = ()=>{
        console.log('hello from deets');
    } */

    getItem = id => {
        const product = this.state.products.find(item => item.id === id);
        return product;
      };

    handleDetail = id => {
        const product = this.getItem(id);
        this.setState(() => {
          return { EmployeeService: product };
        });
      };


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