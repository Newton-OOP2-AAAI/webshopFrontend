import React, { Component } from "react";
import styled from "styled-components";
import NavigationComponent from "../components/NavigationComponent";
import {Link} from "react-router-dom";
import ProductService from "../services/ProductService";
import Product from "../pages/Product";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      categories: [],
    };
  }

  componentDidMount() {    
    if (this.props && this.props.match && this.props.match.params && this.props.match.params.id) {
      const categoryId = this.props.match.params.id;
      ProductService.getProductsInCategory(categoryId).then((response) => {
        this.setState({ products: response.data.content });        
      });

    } else {
      ProductService.getProducts().then((response) => {
        this.setState({ products: response.data.content });
      });
    }
    ProductService.getCategories().then((response) => {
      this.setState({ categories: response.data });
    });
  }

  changeCategory(categoryId) {
    ProductService.getProductsInCategory(categoryId).then((response) => {
      this.setState({ products: response.data.content });        
    });    
  }


  render() {
    return (
      <div>
        <NavigationComponent />

        <React.Fragment>
          <ProductWrapper className="py-5">
            <div className="container">
              <div class="row">
                <div class="col-lg-3">
                  <h1 class="h2 pb-4">Categories</h1>
                  <ul class="list-unstyled templatemo-accordion">
                    {this.state.categories.map((category) => (
                      <li class="pb-3">
                        <a href="#" onClick={()=> this.changeCategory(category.id)}
                              className="collapsed d-flex justify-content-between h3 text-decoration-none"
                        >
                          {category.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div class="col-lg-9">
                  {this.state.products.map((product) => (
                    <Product key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </div>
          </ProductWrapper>
        </React.Fragment>
      </div>
    );
  }
}

const ProductWrapper = styled.section``;
