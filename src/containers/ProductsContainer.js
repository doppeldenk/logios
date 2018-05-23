import { connect } from 'react-redux';

import Products from '../components/Products';

import { fetchProducts } from '../actions/products';

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = {
  fetchProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
