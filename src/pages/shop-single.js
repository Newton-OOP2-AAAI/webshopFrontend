import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import NavigationComponent from "../components/NavigationComponent";

import EmployeeComponent from "../components/EmployeeComponent";
class ShopSingle extends React.Component {
  render() {
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
              action
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
                    src="assets/img/product_single_10.jpg"
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
                                className="card-img img-fluid"
                                src="assets/img/product_single_01.jpg"
                                alt="Product Image 1"
                              />
                            </a>
                          </div>
                          <div className="col-4">
                            <a href="#">
                              <img
                                className="card-img img-fluid"
                                src="assets/img/product_single_02.jpg"
                                alt="Product Image 2"
                              />
                            </a>
                          </div>
                          <div className="col-4">
                            <a href="#">
                              <img
                                className="card-img img-fluid"
                                src="assets/img/product_single_03.jpg"
                                alt="Product Image 3"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      {/*/.First slide*/}
                      {/*Second slide*/}
                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-4">
                            <a href="#">
                              <img
                                className="card-img img-fluid"
                                src="assets/img/product_single_04.jpg"
                                alt="Product Image 4"
                              />
                            </a>
                          </div>
                          <div className="col-4">
                            <a href="#">
                              <img
                                className="card-img img-fluid"
                                src="assets/img/product_single_05.jpg"
                                alt="Product Image 5"
                              />
                            </a>
                          </div>
                          <div className="col-4">
                            <a href="#">
                              <img
                                className="card-img img-fluid"
                                src="assets/img/product_single_06.jpg"
                                alt="Product Image 6"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      {/*/.Second slide*/}
                      {/*Third slide*/}
                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-4">
                            <a href="#">
                              <img
                                className="card-img img-fluid"
                                src="assets/img/product_single_07.jpg"
                                alt="Product Image 7"
                              />
                            </a>
                          </div>
                          <div className="col-4">
                            <a href="#">
                              <img
                                className="card-img img-fluid"
                                src="assets/img/product_single_08.jpg"
                                alt="Product Image 8"
                              />
                            </a>
                          </div>
                          <div className="col-4">
                            <a href="#">
                              <img
                                className="card-img img-fluid"
                                src="assets/img/product_single_09.jpg"
                                alt="Product Image 9"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      {/*/.Third slide*/}
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
                    <h1 className="h2">Active Wear</h1>
                    <p className="h3 py-2">$25.00</p>
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
                        <h6>Brand:</h6>
                      </li>
                      <li className="list-inline-item">
                        <p className="text-muted">
                          <strong>Easy Wear</strong>
                        </p>
                      </li>
                    </ul>
                    <h6>Description:</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod temp incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse. Donec condimentum
                      elementum convallis. Nunc sed orci a diam ultrices aliquet
                      interdum quis nulla.
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
                    <h6>Specification:</h6>
                    <ul className="list-unstyled pb-3">
                      <li>Lorem ipsum dolor sit</li>
                      <li>Amet, consectetur</li>
                      <li>Adipiscing elit,set</li>
                      <li>Duis aute irure</li>
                      <li>Ut enim ad minim</li>
                      <li>Dolore magna aliqua</li>
                      <li>Excepteur sint</li>
                    </ul>
                    <form action method="GET">
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
                              <span className="btn btn-success" id="btn-minus">
                                -
                              </span>
                            </li>
                            <li className="list-inline-item">
                              <span
                                className="badge bg-secondary"
                                id="var-value"
                              >
                                1
                              </span>
                            </li>
                            <li className="list-inline-item">
                              <span className="btn btn-success" id="btn-plus">
                                +
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="row pb-3">
                        <div className="col d-grid">
                          <button
                            type="submit"
                            className="btn btn-success btn-lg"
                            name="submit"
                            value="buy"
                          >
                            Buy
                          </button>
                        </div>
                        <div className="col d-grid">
                          <button
                            type="submit"
                            className="btn btn-success btn-lg"
                            name="submit"
                            value="addtocard"
                          >
                            Add To Cart
                          </button>
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
        {/* Start Article */}
        <section className="py-5">
          <div className="container">
            <div className="row text-left p-2 pb-3">
              <h4>Related Products</h4>
            </div>
            {/*Start Carousel Wrapper*/}
            <div id="carousel-related-product">
              <div className="p-2 pb-3">
                <div className="product-wap card rounded-0">
                  <div className="card rounded-0">
                    <img
                      className="card-img rounded-0 img-fluid"
                      src="assets/img/shop_08.jpg"
                    />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="btn btn-success text-white"
                            href="shop-single.html"
                          >
                            <i className="far fa-heart" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="far fa-eye" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="fas fa-cart-plus" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <a
                      href="shop-single.html"
                      className="h3 text-decoration-none"
                    >
                      Red Clothing
                    </a>
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                      <li>M/L/X/XL</li>
                      <li className="pt-2">
                        <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                      </li>
                    </ul>
                    <ul className="list-unstyled d-flex justify-content-center mb-1">
                      <li>
                        <i className="text-warning fa fa-star" />
                        <i className="text-warning fa fa-star" />
                        <i className="text-warning fa fa-star" />
                        <i className="text-warning fa fa-star" />
                        <i className="text-muted fa fa-star" />
                      </li>
                    </ul>
                    <p className="text-center mb-0">$20.00</p>
                  </div>
                </div>
              </div>
              <div className="p-2 pb-3">
                <div className="product-wap card rounded-0">
                  <div className="card rounded-0">
                    <img
                      className="card-img rounded-0 img-fluid"
                      src="assets/img/shop_09.jpg"
                    />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="btn btn-success text-white"
                            href="shop-single.html"
                          >
                            <i className="far fa-heart" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="far fa-eye" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="fas fa-cart-plus" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <a
                      href="shop-single.html"
                      className="h3 text-decoration-none"
                    >
                      White Shirt
                    </a>
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                      <li>M/L/X/XL</li>
                      <li className="pt-2">
                        <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                      </li>
                    </ul>
                    <ul className="list-unstyled d-flex justify-content-center mb-1">
                      <li>
                        <i className="text-warning fa fa-star" />
                        <i className="text-warning fa fa-star" />
                        <i className="text-warning fa fa-star" />
                        <i className="text-muted fa fa-star" />
                        <i className="text-muted fa fa-star" />
                      </li>
                    </ul>
                    <p className="text-center mb-0">$25.00</p>
                  </div>
                </div>
              </div>
              <div className="p-2 pb-3">
                <div className="product-wap card rounded-0">
                  <div className="card rounded-0">
                    <img
                      className="card-img rounded-0 img-fluid"
                      src="assets/img/shop_10.jpg"
                    />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="btn btn-success text-white"
                            href="shop-single.html"
                          >
                            <i className="far fa-heart" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="far fa-eye" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="fas fa-cart-plus" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <a
                      href="shop-single.html"
                      className="h3 text-decoration-none"
                    >
                      Oupidatat non
                    </a>
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                      <li>M/L/X/XL</li>
                      <li className="pt-2">
                        <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                      </li>
                    </ul>
                    <ul className="list-unstyled d-flex justify-content-center mb-1">
                      <li>
                        <i className="text-warning fa fa-star" />
                        <i className="text-warning fa fa-star" />
                        <i className="text-warning fa fa-star" />
                        <i className="text-warning fa fa-star" />
                        <i className="text-warning fa fa-star" />
                      </li>
                    </ul>
                    <p className="text-center mb-0">$45.00</p>
                  </div>
                </div>
              </div>
              <div className="p-2 pb-3">
                <div className="product-wap card rounded-0">
                  <div className="card rounded-0">
                    <img
                      className="card-img rounded-0 img-fluid"
                      src="assets/img/shop_11.jpg"
                    />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="btn btn-success text-white"
                            href="shop-single.html"
                          >
                            <i className="far fa-heart" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="far fa-eye" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="fas fa-cart-plus" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <a
                      href="shop-single.html"
                      className="h3 text-decoration-none"
                    >
                      Black Fashion
                    </a>
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                      <li>M/L/X/XL</li>
                      <li className="pt-2">
                        <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                      </li>
                    </ul>
                    <ul className="list-unstyled d-flex justify-content-center mb-1">
                      <li>
                        <i className="text-warning fa fa-star" />
                        <i className="text-warning fa fa-star" />
                        <i className="text-warning fa fa-star" />
                        <i className="text-muted fa fa-star" />
                        <i className="text-muted fa fa-star" />
                      </li>
                    </ul>
                    <p className="text-center mb-0">$60.00</p>
                  </div>
                </div>
              </div>
              <div className="p-2 pb-3">
                <div className="product-wap card rounded-0">
                  <div className="card rounded-0">
                    <img
                      className="card-img rounded-0 img-fluid"
                      src="assets/img/shop_08.jpg"
                    />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="btn btn-success text-white"
                            href="shop-single.html"
                          >
                            <i className="far fa-heart" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="far fa-eye" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="fas fa-cart-plus" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <a
                      href="shop-single.html"
                      className="h3 text-decoration-none"
                    >
                      Oupidatat non
                    </a>
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                      <li className>M/L/X/XL</li>
                      <li className="pt-2">
                        <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                      </li>
                    </ul>
                    <ul className="list-unstyled d-flex justify-content-center mb-1">
                      <li>
                        <i className="text-warning fa fa-star" />
                        <i className="text-warning fa fa-star" />
                        <i className="text-warning fa fa-star" />
                        <i className="text-muted fa fa-star" />
                        <i className="text-muted fa fa-star" />
                      </li>
                    </ul>
                    <p className="text-center mb-0">$80.00</p>
                  </div>
                </div>
              </div>
              <div className="p-2 pb-3">
                <div className="product-wap card rounded-0">
                  <div className="card rounded-0">
                    <img
                      className="card-img rounded-0 img-fluid"
                      src="assets/img/shop_09.jpg"
                    />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="btn btn-success text-white"
                            href="shop-single.html"
                          >
                            <i className="far fa-heart" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="far fa-eye" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="fas fa-cart-plus" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <a
                      href="shop-single.html"
                      className="h3 text-decoration-none"
                    >
                      Oupidatat non
                    </a>
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                      <li>M/L/X/XL</li>
                      <li className="pt-2">
                        <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                      </li>
                    </ul>
                    <ul className="list-unstyled d-flex justify-content-center mb-1">
                      <li>
                        <i className="text-warning fa fa-star" />
                        <i className="text-warning fa fa-star" />
                        <i className="text-warning fa fa-star" />
                        <i className="text-muted fa fa-star" />
                        <i className="text-muted fa fa-star" />
                      </li>
                    </ul>
                    <p className="text-center mb-0">$110.00</p>
                  </div>
                </div>
              </div>
              <div className="p-2 pb-3">
                <div className="product-wap card rounded-0">
                  <div className="card rounded-0">
                    <img
                      className="card-img rounded-0 img-fluid"
                      src="assets/img/shop_10.jpg"
                    />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="btn btn-success text-white"
                            href="shop-single.html"
                          >
                            <i className="far fa-heart" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="far fa-eye" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="fas fa-cart-plus" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <a
                      href="shop-single.html"
                      className="h3 text-decoration-none"
                    >
                      Oupidatat non
                    </a>
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                      <li>M/L/X/XL</li>
                      <li className="pt-2">
                        <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                      </li>
                    </ul>
                    <ul className="list-unstyled d-flex justify-content-center mb-1">
                      <li>
                        <i className="text-warning fa fa-star" />
                        <i className="text-warning fa fa-star" />
                        <i className="text-warning fa fa-star" />
                        <i className="text-muted fa fa-star" />
                        <i className="text-muted fa fa-star" />
                      </li>
                    </ul>
                    <p className="text-center mb-0">$125.00</p>
                  </div>
                </div>
              </div>
              <div className="p-2 pb-3">
                <div className="product-wap card rounded-0">
                  <div className="card rounded-0">
                    <img
                      className="card-img rounded-0 img-fluid"
                      src="assets/img/shop_11.jpg"
                    />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="btn btn-success text-white"
                            href="shop-single.html"
                          >
                            <i className="far fa-heart" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="far fa-eye" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="fas fa-cart-plus" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <a
                      href="shop-single.html"
                      className="h3 text-decoration-none"
                    >
                      Oupidatat non
                    </a>
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                      <li>M/L/X/XL</li>
                      <li className="pt-2">
                        <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                      </li>
                    </ul>
                    <ul className="list-unstyled d-flex justify-content-center mb-1">
                      <li>
                        <i className="text-warning fa fa-star" />
                        <i className="text-warning fa fa-star" />
                        <i className="text-warning fa fa-star" />
                        <i className="text-muted fa fa-star" />
                        <i className="text-muted fa fa-star" />
                      </li>
                    </ul>
                    <p className="text-center mb-0">$160.00</p>
                  </div>
                </div>
              </div>
              <div className="p-2 pb-3">
                <div className="product-wap card rounded-0">
                  <div className="card rounded-0">
                    <img
                      className="card-img rounded-0 img-fluid"
                      src="assets/img/shop_08.jpg"
                    />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="btn btn-success text-white"
                            href="shop-single.html"
                          >
                            <i className="far fa-heart" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="far fa-eye" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="fas fa-cart-plus" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <a
                      href="shop-single.html"
                      className="h3 text-decoration-none"
                    >
                      Oupidatat non
                    </a>
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                      <li>M/L/X/XL</li>
                      <li className="pt-2">
                        <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                      </li>
                    </ul>
                    <ul className="list-unstyled d-flex justify-content-center mb-1">
                      <li>
                        <i className="text-warning fa fa-star" />
                        <i className="text-warning fa fa-star" />
                        <i className="text-warning fa fa-star" />
                        <i className="text-muted fa fa-star" />
                        <i className="text-muted fa fa-star" />
                      </li>
                    </ul>
                    <p className="text-center mb-0">$180.00</p>
                  </div>
                </div>
              </div>
              <div className="p-2 pb-3">
                <div className="product-wap card rounded-0">
                  <div className="card rounded-0">
                    <img
                      className="card-img rounded-0 img-fluid"
                      src="assets/img/shop_09.jpg"
                    />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="btn btn-success text-white"
                            href="shop-single.html"
                          >
                            <i className="far fa-heart" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="far fa-eye" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="fas fa-cart-plus" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <a
                      href="shop-single.html"
                      className="h3 text-decoration-none"
                    >
                      Oupidatat non
                    </a>
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                      <li>M/L/X/XL</li>
                      <li className="pt-2">
                        <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                      </li>
                    </ul>
                    <ul className="list-unstyled d-flex justify-content-center mb-1">
                      <li>
                        <i className="text-warning fa fa-star" />
                        <i className="text-warning fa fa-star" />
                        <i className="text-warning fa fa-star" />
                        <i className="text-muted fa fa-star" />
                        <i className="text-muted fa fa-star" />
                      </li>
                    </ul>
                    <p className="text-center mb-0">$220.00</p>
                  </div>
                </div>
              </div>
              <div className="p-2 pb-3">
                <div className="product-wap card rounded-0">
                  <div className="card rounded-0">
                    <img
                      className="card-img rounded-0 img-fluid"
                      src="assets/img/shop_10.jpg"
                    />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="btn btn-success text-white"
                            href="shop-single.html"
                          >
                            <i className="far fa-heart" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="far fa-eye" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="fas fa-cart-plus" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <a
                      href="shop-single.html"
                      className="h3 text-decoration-none"
                    >
                      Oupidatat non
                    </a>
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                      <li>M/L/X/XL</li>
                      <li className="pt-2">
                        <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                      </li>
                    </ul>
                    <ul className="list-unstyled d-flex justify-content-center mb-1">
                      <li>
                        <i className="text-warning fa fa-star" />
                        <i className="text-warning fa fa-star" />
                        <i className="text-warning fa fa-star" />
                        <i className="text-muted fa fa-star" />
                        <i className="text-muted fa fa-star" />
                      </li>
                    </ul>
                    <p className="text-center mb-0">$250.00</p>
                  </div>
                </div>
              </div>
              <div className="p-2 pb-3">
                <div className="product-wap card rounded-0">
                  <div className="card rounded-0">
                    <img
                      className="card-img rounded-0 img-fluid"
                      src="assets/img/shop_11.jpg"
                    />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="btn btn-success text-white"
                            href="shop-single.html"
                          >
                            <i className="far fa-heart" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="far fa-eye" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="fas fa-cart-plus" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <a
                      href="shop-single.html"
                      className="h3 text-decoration-none"
                    >
                      Oupidatat non
                    </a>
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                      <li>M/L/X/XL</li>
                      <li className="pt-2">
                        <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                      </li>
                    </ul>
                    <ul className="list-unstyled d-flex justify-content-center mb-1">
                      <li>
                        <i className="text-warning fa fa-star" />
                        <i className="text-warning fa fa-star" />
                        <i className="text-warning fa fa-star" />
                        <i className="text-muted fa fa-star" />
                        <i className="text-muted fa fa-star" />
                      </li>
                    </ul>
                    <p className="text-center mb-0">$300.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Article */}
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
export default ShopSingle;
