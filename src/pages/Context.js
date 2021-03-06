import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import SingleEmployeeService from '../services/SingleEmployeeService';


const ProductContext = React.createContext();

class ProductProvider extends Component {
    constructor(props) {
        super(props)
      this.state = {
        products: []
      }
    }
  
    state= {
        products: [],
        SingleEmployeeService: SingleEmployeeService
    };
    componentDidMount(){
        this.setProducts();
    }
     setProducts = () => {
        let products = [];
        {this.state.products.map(item => {
        const singleItem = {...item};
        products = [...products,singleItem];
    })};
    this.setState(() =>{
    return {products:products}
    });

    }; 





     handleDetail = ()=>{
        console.log('hello from deets');
    } 

    getItem = id => {
        const product = this.state.products.find(item => item.id === id);
        return product;
      };

    handleDetail = id => {
        const product = this.getItem(id);
        this.setState(() => {
          return { SingleEmployeeService: product };
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