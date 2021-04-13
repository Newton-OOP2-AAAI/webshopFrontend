import React, { Component } from "react";
import styled from "styled-components";
import NavigationComponent from '../components/NavigationComponent';


import ProductService from "../services/ProductService";

import Products from "../pages/products"
import Product from "../pages/Product"


export default class ProductList extends Component {
  constructor(props) {
    super(props)
  this.state = {
    products: []
  }
}

componentDidMount() {

  ProductService.getProducts().then((response) => {
    this.setState({ products: response.data });
  });
}
   render() {

    return (
<div>
<NavigationComponent/>

      <React.Fragment>
      <ProductWrapper className="py-5">
        <div className="container">
          <div className="row">
            {this.state.products.map(  product => 
                   <Product key={product.id} product={product} />
                
            )}
            
          </div>
        </div>
      </ProductWrapper>
     </React.Fragment>
     </div>
    ); 
  } 
}

const ProductWrapper = styled.section``;