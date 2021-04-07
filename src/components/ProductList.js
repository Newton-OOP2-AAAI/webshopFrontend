import React, { Component } from "react";
import styled from "styled-components";

// import {ProductService} from "../services/ProductService";

//import Title from "./Title";
import ProductService from "../services/ProductService";
import EmployeeService from '../services/EmployeeService';

import { ProductConsumer } from "../pages/Context";
import Products from "../pages/products"

export default class ProductList extends Component {
    state = {
        products: EmployeeService
      };
  render() {
    return (
      <React.Fragment>
        <ProductWrapper className="py-5">
          <div className="container">
            {/*  <Title name="our" title="products" /> */}

            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.products.map(product => {
                    return <Products key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </ProductWrapper>
      </React.Fragment>
    );
  }
}

const ProductWrapper = styled.section``;