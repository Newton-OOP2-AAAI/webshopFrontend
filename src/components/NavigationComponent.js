import React from "react";
import About from "../pages/about";
import Home from "../pages/home";
import CartService from "../services/CartService";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

class NavigationComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: CartService.getCurrentCart(),
      cartIsOpen: false,
    };
  }

  componentDidMount() {
    if (typeof this.props.cart == undefined || this.props.cart == null) {
      return;
    }

    this.setState({ cart: this.props.cart });
  }

  removeItemFromCart(item) {
    CartService.remove(item);
    this.setState({ cart: CartService.getCurrentCart() });
    this.forceUpdate();
  }

  renderCart() {
    if (this.state.cartIsOpen) {
      return (
        <div className="position-relative">
          <a
            className="nav-icon position-relative text-decoration-none"
            href="#"
            onClick={() => {
              this.state.cartIsOpen = !this.state.cartIsOpen;
              this.forceUpdate();
            }}
          >
            <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1" />
            <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
              {this.state.cart.items.length}
            </span>
          </a>
          <div className="cart-dialog">
            {this.state.cart.items.map((item, i) => {
              return (
                <div className="cart-item-row" key={item.id + "_" + i}>
                  <img
                    className="item-image"
                    src={"/assets/img/" + item.id + "_0.jpg"}
                  />
                  <div className="item-name">{item.name}</div>
                  <div className="item-amount">{1}</div>
                  <div
                    className="btn btn-danger btn-remove-from-cart"
                    onClick={() => this.removeItemFromCart(item)}
                  >
                    &times;
                  </div>
                </div>
              );
            })}

            <div className="btn btn-primary btn-checkout">
              <i className="fas fa-shopping-cart"></i>&nbsp;Go to checkout
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <a
          className="nav-icon position-relative text-decoration-none"
          href="#"
          onClick={() => {
            this.state.cartIsOpen = !this.state.cartIsOpen;
            this.forceUpdate();
          }}
        >
          <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1" />
          <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
            {this.state.cart.items.length}
          </span>
        </a>
      );
    }
  }

  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block"
          id="templatemo_nav_top"
        >
          <div className="container text-light">
            <div className="w-100 d-flex justify-content-between">
              <div>
                <i className="fa fa-envelope mx-2" />
                <a
                  className="navbar-sm-brand text-light text-decoration-none"
                  href="mailto:info@company.com"
                >
                  info@company.com
                </a>
                <i className="fa fa-phone mx-2" />
                <a
                  className="navbar-sm-brand text-light text-decoration-none"
                  href="tel:010-020-0340"
                >
                  010-020-0340
                </a>
              </div>
              <div>
                <a
                  className="text-light"
                  href="https://fb.com/templatemo"
                  target="_blank"
                  rel="sponsored"
                >
                  <i className="fab fa-facebook-f fa-sm fa-fw me-2" />
                </a>
                <a
                  className="text-light"
                  href="https://www.instagram.com/"
                  target="_blank"
                >
                  <i className="fab fa-instagram fa-sm fa-fw me-2" />
                </a>
                <a
                  className="text-light"
                  href="https://twitter.com/"
                  target="_blank"
                >
                  <i className="fab fa-twitter fa-sm fa-fw me-2" />
                </a>
                <a
                  className="text-light"
                  href="https://www.linkedin.com/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin fa-sm fa-fw" />
                </a>
              </div>
            </div>
          </div>
        </nav>
        {/* Close Top Nav */}
        {/* Header */}
        <nav className="navbar navbar-expand-lg navbar-light shadow">
          <div className="container d-flex justify-content-between align-items-center">
            <Link
              to="/"
              className="navbar-brand text-success logo h1 align-self-center"
            >
              AAAI
            </Link>

            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#templatemo_main_nav"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
              id="templatemo_main_nav"
            >
              <div className="flex-fill">
                <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/About" className="nav-link">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/ProductList" className="nav-link">
                      Shop
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="navbar align-self-center d-flex">
                <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      id="inputMobileSearch"
                      placeholder="Search ..."
                    />
                    <div className="input-group-text">
                      <i className="fa fa-fw fa-search" />
                    </div>
                  </div>
                </div>
                <a
                  className="nav-icon d-none d-lg-inline"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#templatemo_search"
                >
                  <i className="fa fa-fw fa-search text-dark mr-2" />
                </a>

                {this.renderCart()}

                <a
                  className="nav-icon position-relative text-decoration-none"
                  href="#"
                >
                  <i className="fa fa-fw fa-user text-dark mr-3" />
                  <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                    +99
                  </span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavigationComponent;
