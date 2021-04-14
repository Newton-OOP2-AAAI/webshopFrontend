import React, { Component } from "react";
import styled from "styled-components";
import CartService from "../services/CartService";
import NavigationComponent from "../components/NavigationComponent";

import ProductService from "../services/ProductService";

import { Link } from "react-router-dom";

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},      
      selectedImageIndex: 0,
      selectedAmount: 1
    };
  }

  decreaseAmount() {
    const value = Math.max(1, this.state.selectedAmount - 1);
    this.setState({selectedAmount: value});
    this.forceUpdate();
  }

  increaseAmount() {
    const value = this.state.selectedAmount+1;
    this.setState({selectedAmount: value});
    this.forceUpdate();
  }

  addToCart() {    
      for(let i = 0; i < this.state.selectedAmount; ++i) {
        CartService.add(this.state.product);        
      }

      this.forceUpdate();
  } 

  componentDidMount() {
    if (typeof this.props.match.params.id == undefined) {
      return;
    }



    ProductService.getProduct(this.props.match.params.id).then((response) => {
      this.setState({ product: response.data });
    });

    // window.makeCarousel();
  }
  

  render() {
    const categories = this.state.product && this.state.product.categories ? Object.values(this.state.product.categories) : []
    ;
    console.log(categories);
;
    return (
    
      <div>
        <NavigationComponent />
        <div
          className="modal fade bg-white"
          id="templatemo_search"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="w-100 pt-1 mb-5 text-right">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <form 
              method="get"
              className="modal-content modal-body border-0 p-0"
            >
              <div className="input-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  id="inputModalSearch"
                  name="q"
                  placeholder="Search ..."
                />
                <button
                  type="submit"
                  className="input-group-text bg-success text-light"
                >
                  <i className="fa fa-fw fa-search text-white" />
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Open Content */}
        <section className="bg-light">
          <div className="container pb-5">
            <div className="row">
              <div className="col-lg-5 mt-5">
                <div className="card mb-3">
                  <img
                    className="card-img img-fluid"
                    src={'/assets/img/' + this.state.product.id + '_' + this.state.selectedImageIndex + '.jpg'}
                    alt="Card image cap"
                    id="product-detail"
                  />
                </div>
                <div className="row">
                  {/*Start Controls*/}
                  <div className="col-1 align-self-center">
                    <a
                      href="#multi-item-example"
                      role="button"
                      data-bs-slide="prev"
                    >
                      <i className="text-dark fas fa-chevron-left" />
                      <span className="sr-only">Previous</span>
                    </a>
                  </div>
                  {/*End Controls*/}
                  {/*Start Carousel Wrapper*/}
                  <div
                    id="multi-item-example"
                    className="col-10 carousel slide carousel-multi-item"
                    data-bs-ride="carousel"
                  >
                    {/*Start Slides*/}
                    <div
                      className="carousel-inner product-links-wap"
                      role="listbox"
                    >
                      {/*First slide*/}
                      <div className="carousel-item active">
                        <div className="row">
                          <div className="col-4">
                            <a href="#">
                              <img
                                onClick={()=>this.state.selectedImageIndex = 0}
                                className="card-img img-fluid"
                                src={'/assets/img/' + this.state.product.id + '_0.jpg'}
                                alt="Product Image 1"
                              />
                            </a>
                          </div>
                          <div className="col-4">
                            <a href="#" onClick={()=>this.state.selectedImageIndex = 1}>
                              <img
                                className="card-img img-fluid"
                                src={'/assets/img/' + this.state.product.id + '_1.jpg'}
                                alt="Product Image 2"
                              />
                            </a>
                          </div>
                          <div className="col-4">
                            <a href="#">
                              <img
                                onClick={()=>this.state.selectedImageIndex = 2}
                                className="card-img img-fluid"
                                src={'/assets/img/' + this.state.product.id + '_2.jpg'}
                                alt="Product Image 3"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      {/*/.First slide*/}
                    </div>
                    {/*End Slides*/}
                  </div>
                  {/*End Carousel Wrapper*/}
                  {/*Start Controls*/}
                  <div className="col-1 align-self-center">
                    <a
                      href="#multi-item-example"
                      role="button"
                      data-bs-slide="next"
                    >
                      <i className="text-dark fas fa-chevron-right" />
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                  {/*End Controls*/}
                </div>
              </div>
              {/* col end */}
              <div className="col-lg-7 mt-5">
                <div className="card">
                  <div className="card-body">
                    <h1 className="h2">{this.state.product.name}</h1>
                    <p className="h3 py-2">${this.state.product.price}.00</p>
                    <p className="py-2">
                      <i className="fa fa-star text-warning" />
                      <i className="fa fa-star text-warning" />
                      <i className="fa fa-star text-warning" />
                      <i className="fa fa-star text-warning" />
                      <i className="fa fa-star text-secondary" />
                      <span className="list-inline-item text-dark">
                        Rating 4.8 | 36 Comments
                      </span>
                    </p>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <h6>Category:</h6>
                      </li>
                      <li className="list-inline-item">
                        <p className="text-muted">
                          <strong>
                          {categories.join(", ")}
                          </strong>
                        </p>
                      </li>
                    </ul>
                    <h6>Description:</h6>
                    <p>
                      {this.state.product.description}
                    </p>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <h6>Avaliable Color :</h6>
                      </li>
                      <li className="list-inline-item">
                        <p className="text-muted">
                          <strong>White / Black</strong>
                        </p>
                      </li>
                    </ul>
                    
                    <form method="GET">
                      <input
                        type="hidden"
                        name="product-title"
                        defaultValue="Activewear"
                      />
                      <div className="row">
                        <div className="col-auto">
                          <ul className="list-inline pb-3">
                            <li className="list-inline-item">
                              Size :
                              <input
                                type="hidden"
                                name="product-size"
                                id="product-size"
                                defaultValue="S"
                              />
                            </li>
                            <li className="list-inline-item">
                              <span className="btn btn-success btn-size">
                                S
                              </span>
                            </li>
                            <li className="list-inline-item">
                              <span className="btn btn-success btn-size">
                                M
                              </span>
                            </li>
                            <li className="list-inline-item">
                              <span className="btn btn-success btn-size">
                                L
                              </span>
                            </li>
                            <li className="list-inline-item">
                              <span className="btn btn-success btn-size">
                                XL
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-auto">
                          <ul className="list-inline pb-3">
                            <li className="list-inline-item text-right">
                              Quantity
                              <input
                                type="hidden"
                                name="product-quanity"
                                id="product-quanity"
                                defaultValue={1}
                              />
                            </li>
                            <li className="list-inline-item">
                              <span className="btn btn-success" id="btn-minus"  onClick={() => { this.decreaseAmount(); }}>
                                -
                              </span>
                            </li>
                            <li className="list-inline-item">
                              <span
                                className="badge bg-secondary"
                                id="var-value"
                              >
                                {this.state.selectedAmount}
                              </span>
                            </li>
                            <li className="list-inline-item">
                              <span className="btn btn-success" id="btn-plus" onClick={() => { this.increaseAmount(); }}>
                                +
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="row pb-3">
                        <div className="col d-grid">
                          <Link to="/ProductList">
                            <button
                              type="submit"
                              className="btn btn-success btn-lg"
                             >
                              Go back
                            </button>
                          </Link>
                        </div>
                        <div className="col d-grid">
                          <a href="#"
                            type="submit"
                            className="btn btn-success btn-lg"
                            name="submit"
                            value="addtocard"
                            onClick={() => this.addToCart()}
                          >
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Close Content */}
        {/* Start Footer */}
        <footer className="bg-dark" id="tempaltemo_footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4 pt-5">
                <h2 className="h2 text-success border-bottom pb-3 border-light logo">
                  AAAI Shop
                </h2>
                <ul className="list-unstyled text-light footer-link-list">
                  <li>
                    <i className="fas fa-map-marker-alt fa-fw" />
                    123 Consectetur at ligula 10660
                  </li>
                  <li>
                    <i className="fa fa-phone fa-fw" />
                    <a className="text-decoration-none" href="tel:010-020-0340">
                      010-020-0340
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-envelope fa-fw" />
                    <a
                      className="text-decoration-none"
                      href="mailto:info@company.com"
                    >
                      info@company.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 pt-5">
                <h2 className="h2 text-light border-bottom pb-3 border-light">
                  Products
                </h2>
                <ul className="list-unstyled text-light footer-link-list">
                  <li>
                    <a className="text-decoration-none" href="#">
                      Luxury
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Sport Wear
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Men's Shoes
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Women's Shoes
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Popular Dress
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Gym Accessories
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Sport Shoes
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 pt-5">
                <h2 className="h2 text-light border-bottom pb-3 border-light">
                  Further Info
                </h2>
                <ul className="list-unstyled text-light footer-link-list">
                  <li>
                    <a className="text-decoration-none" href="#">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Shop Locations
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row text-light mb-4">
              <div className="col-12 mb-3">
                <div className="w-100 my-3 border-top border-light" />
              </div>
              <div className="col-auto me-auto">
                <ul className="list-inline text-left footer-icons">
                  <li className="list-inline-item border border-light rounded-circle text-center">
                    <a
                      className="text-light text-decoration-none"
                      target="_blank"
                      href="http://facebook.com/"
                    >
                      <i className="fab fa-facebook-f fa-lg fa-fw" />
                    </a>
                  </li>
                  <li className="list-inline-item border border-light rounded-circle text-center">
                    <a
                      className="text-light text-decoration-none"
                      target="_blank"
                      href="https://www.instagram.com/"
                    >
                      <i className="fab fa-instagram fa-lg fa-fw" />
                    </a>
                  </li>
                  <li className="list-inline-item border border-light rounded-circle text-center">
                    <a
                      className="text-light text-decoration-none"
                      target="_blank"
                      href="https://twitter.com/"
                    >
                      <i className="fab fa-twitter fa-lg fa-fw" />
                    </a>
                  </li>
                  <li className="list-inline-item border border-light rounded-circle text-center">
                    <a
                      className="text-light text-decoration-none"
                      target="_blank"
                      href="https://www.linkedin.com/"
                    >
                      <i className="fab fa-linkedin fa-lg fa-fw" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-auto">
                <label className="sr-only" htmlFor="subscribeEmail">
                  Email address
                </label>
                <div className="input-group mb-2">
                  <input
                    type="text"
                    className="form-control bg-dark border-light"
                    id="subscribeEmail"
                    placeholder="Email address"
                  />
                  <div className="input-group-text btn-success text-light">
                    Subscribe
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-100 bg-black py-3">
            <div className="container">
              <div className="row pt-2">
                <div className="col-12">
                  <p className="text-left text-light">
                    Copyright © 2021 Company Name | Designed by{" "}
                    <a
                      rel="sponsored"
                      href="https://templatemo.com"
                      target="_blank"
                    >
                      TemplateMo
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

const ProductWrapper = styled.section``;
