import React from "react";
import { Link } from "react-router-dom";
import NavigationComponent from "../components/NavigationComponent";

import EmployeeComponent from "../components/EmployeeComponent";
class Shop extends React.Component {
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
        {/* Start Content */}
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-3">
              <h1 className="h2 pb-4">Categories</h1>
              <ul className="list-unstyled templatemo-accordion">
                <li className="pb-3">
                  <a
                    className="collapsed d-flex justify-content-between h3 text-decoration-none"
                    href="#"
                  >
                    Gender
                    <i className="fa fa-fw fa-chevron-circle-down mt-1" />
                  </a>
                  <ul className="collapse show list-unstyled pl-3">
                    <li>
                      <a className="text-decoration-none" href="#">
                        Men
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none" href="#">
                        Women
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="pb-3">
                  <a
                    className="collapsed d-flex justify-content-between h3 text-decoration-none"
                    href="#"
                  >
                    Sale
                    <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1" />
                  </a>
                  <ul id="collapseTwo" className="collapse list-unstyled pl-3">
                    <li>
                      <a className="text-decoration-none" href="#">
                        Sport
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none" href="#">
                        Luxury
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="pb-3">
                  <a
                    className="collapsed d-flex justify-content-between h3 text-decoration-none"
                    href="#"
                  >
                    Product
                    <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1" />
                  </a>
                  <ul
                    id="collapseThree"
                    className="collapse list-unstyled pl-3"
                  >
                    <li>
                      <a className="text-decoration-none" href="#">
                        Bag
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none" href="#">
                        Sweather
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none" href="#">
                        Sunglass
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-md-6">
                  <ul className="list-inline shop-top-menu pb-3 pt-1">
                    <li className="list-inline-item">
                      <a
                        className="h3 text-dark text-decoration-none mr-3"
                        href="#"
                      >
                        All
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="h3 text-dark text-decoration-none mr-3"
                        href="#"
                      >
                        Men's
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="h3 text-dark text-decoration-none" href="#">
                        Women's
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 pb-4">
                  <div className="d-flex">
                    <select className="form-control">
                      <option>Featured</option>
                      <option>A to Z</option>
                      <option>Item</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="card mb-4 product-wap rounded-0">
                    <div className="card rounded-0">
                      <img
                        className="card-img rounded-0 img-fluid"
                        src="assets/img/shop_01.jpg"
                      />
                      <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                        <ul className="list-unstyled">
                          <li><Link to ="/Deets" className="btn btn-success text-white mt-2">
                              <i className="far fa-cart"></i>  </Link>
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
                <div className="col-md-4">
                  <div className="card mb-4 product-wap rounded-0">
                    <div className="card rounded-0">
                      <img
                        className="card-img rounded-0 img-fluid"
                        src="assets/img/shop_02.jpg"
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
                <div className="col-md-4">
                  <div className="card mb-4 product-wap rounded-0">
                    <div className="card rounded-0">
                      <img
                        className="card-img rounded-0 img-fluid"
                        src="assets/img/shop_03.jpg"
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
                <div className="col-md-4">
                  <div className="card mb-4 product-wap rounded-0">
                    <div className="card rounded-0">
                      <img
                        className="card-img rounded-0 img-fluid"
                        src="assets/img/shop_04.jpg"
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
                <div className="col-md-4">
                  <div className="card mb-4 product-wap rounded-0">
                    <div className="card rounded-0">
                      <img
                        className="card-img rounded-0 img-fluid"
                        src="assets/img/shop_05.jpg"
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
                <div className="col-md-4">
                  <div className="card mb-4 product-wap rounded-0">
                    <div className="card rounded-0">
                      <img
                        className="card-img rounded-0 img-fluid"
                        src="assets/img/shop_06.jpg"
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
                <div className="col-md-4">
                  <div className="card mb-4 product-wap rounded-0">
                    <div className="card rounded-0">
                      <img
                        className="card-img rounded-0 img-fluid"
                        src="assets/img/shop_07.jpg"
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
                <div className="col-md-4">
                  <div className="card mb-4 product-wap rounded-0">
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
                      <p className="text-center mb-0">$250.00</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-4 product-wap rounded-0">
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
                      <p className="text-center mb-0">$250.00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div div="row">
                <ul className="pagination pagination-lg justify-content-end">
                  <li className="page-item disabled">
                    <a
                      className="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0"
                      href="#"
                      tabIndex={-1}
                    >
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark"
                      href="#"
                    >
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark"
                      href="#"
                    >
                      3
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End Content */}
        {/* Start Brands */}
        <section className="bg-light py-5">
          <div className="container my-4">
            <div className="row text-center py-3">
              <div className="col-lg-6 m-auto">
                <h1 className="h1">Our Brands</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div className="col-lg-9 m-auto tempaltemo-carousel">
                <div className="row d-flex flex-row">
                  {/*Controls*/}
                  <div className="col-1 align-self-center">
                    <a
                      className="h1"
                      href="#multi-item-example"
                      role="button"
                      data-bs-slide="prev"
                    >
                      <i className="text-light fas fa-chevron-left" />
                    </a>
                  </div>
                  {/*End Controls*/}
                  {/*Carousel Wrapper*/}
                  <div className="col">
                    <div
                      className="carousel slide carousel-multi-item pt-2 pt-md-0"
                      id="multi-item-example"
                      data-bs-ride="carousel"
                    >
                      {/*Slides*/}
                      <div
                        className="carousel-inner product-links-wap"
                        role="listbox"
                      >
                        {/*First slide*/}
                        <div className="carousel-item active">
                          <div className="row">
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="assets/img/brand_01.png"
                                  alt="Brand Logo"
                                />
                              </a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="assets/img/brand_02.png"
                                  alt="Brand Logo"
                                />
                              </a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="assets/img/brand_03.png"
                                  alt="Brand Logo"
                                />
                              </a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="assets/img/brand_04.png"
                                  alt="Brand Logo"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        {/*End First slide*/}
                        {/*Second slide*/}
                        <div className="carousel-item">
                          <div className="row">
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="assets/img/brand_01.png"
                                  alt="Brand Logo"
                                />
                              </a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="assets/img/brand_02.png"
                                  alt="Brand Logo"
                                />
                              </a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="assets/img/brand_03.png"
                                  alt="Brand Logo"
                                />
                              </a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="assets/img/brand_04.png"
                                  alt="Brand Logo"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        {/*End Second slide*/}
                        {/*Third slide*/}
                        <div className="carousel-item">
                          <div className="row">
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="assets/img/brand_01.png"
                                  alt="Brand Logo"
                                />
                              </a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="assets/img/brand_02.png"
                                  alt="Brand Logo"
                                />
                              </a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="assets/img/brand_03.png"
                                  alt="Brand Logo"
                                />
                              </a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="assets/img/brand_04.png"
                                  alt="Brand Logo"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        {/*End Third slide*/}
                      </div>
                      {/*End Slides*/}
                    </div>
                  </div>
                  {/*End Carousel Wrapper*/}
                  {/*Controls*/}
                  <div className="col-1 align-self-center">
                    <a
                      className="h1"
                      href="#multi-item-example"
                      role="button"
                      data-bs-slide="next"
                    >
                      <i className="text-light fas fa-chevron-right" />
                    </a>
                  </div>
                  {/*End Controls*/}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Brands*/}
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
                    Copyright ?? 2021 Company Name | Designed by{" "}
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
export default Shop;
