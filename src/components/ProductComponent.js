import userEvent from "@testing-library/user-event";
import React from "react";
import ProductService from "../services/ProductService";

class ProductComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    ProductService.getProducts().then((response) => {
      this.setState({ products: response.data });
    });
  }

  render() {
    return (
      <div>
        <h1 className="text-center"> Product List </h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <td>Product id</td>
              <td>Product inventory</td>
              <td>Product name</td>
              <td>Product price</td>
              <td>Product category</td>
              <td>Product description</td>
              <td>Product visibility</td>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((product) => (
              <tr key={product.id}>
                <td> {product.id} </td>
                <td> {product.inventory} </td>
                <td> {product.name} </td>
                <td> {product.price} </td>
                <td> {product.category} </td>
                <td> {product.description} </td>
                <td> {product.visibility} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductComponent;
