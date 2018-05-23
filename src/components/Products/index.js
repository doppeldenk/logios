import React from 'react';

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <h1>Products</h1>
    );
  }
}

export default Products;
