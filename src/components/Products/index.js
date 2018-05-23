import React from 'react';
import PropTypes from 'prop-types';

import Loader from '../Loader';

class Products extends React.Component {
  componentWillMount() {
    const { fetchProducts, products: { payload } } = this.props;
    if (!payload.length) fetchProducts();
  }

  render() {
    const {
      products: {
        fetching, error, payload,
      },
    } = this.props;
    return (
      <div>
        <h1>Products</h1>
        { fetching && <Loader /> }
        { error && 'There was an error' }
        <table border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {
              !!payload.length &&
              payload.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

Products.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  products: PropTypes.object.isRequired,
};

export default Products;
