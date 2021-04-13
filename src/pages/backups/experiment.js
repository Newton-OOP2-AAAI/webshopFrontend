import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavigationComponent from "../../components/NavigationComponent";
import { ProductConsumer } from "../Context";
import EmployeeService from "../../services/EmployeeService"
import Product from "../Product";

export default class Deets extends Component {
    render() {
      return (
        <div>
          <NavigationComponent/>
<ProductConsumer>
    {value => {
       const {
        id,
        city,
        email,
        firstname,
        lastname,
        password,
        phone,
        street_name,
        street_number,
        username,
        zip_code,
        role_id,
      } = value.EmployeeService;
      return (
        <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{password}</h1>
                </div>
              </div>
              {/* end of title */}
              <div className="row">
                {/* <div className="col-10 mx-auto col-md-6 my-3">
                  <img src=".." className="img-fluid" alt="" />
                </div> */}
                {/* prdoduct info */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h1>model : {firstname}</h1>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by : <span className="text-uppercase">{street_number}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price : <span>$</span>
                      {lastname}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    some info about product :
                  </p>
                  <p className="text-muted lead">{street_name}</p>
                  {/* buttons */}
                  {/* <div>
                    <Link to="/">
                      <ButtonContainer>back to products</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "in cart" : "add to cart"}
                    </ButtonContainer>
                  </div> */}
                </div>
              </div>
            </div>
      );
    }}
    </ProductConsumer>
    </div>
      );
  }
}
