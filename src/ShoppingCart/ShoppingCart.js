import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Product from '../Product';

const SELECTED_PRODUCTS_QUERY = gql`
  query {
    selectedProducts @client {
      id
      title
      price
    }
  }
`;

const ShoppingCart = () => (
  <Query query={SELECTED_PRODUCTS_QUERY}>
    {
      ({ data }) => (
        <React.Fragment>
          <p>
            Shopping cart
          </p>

          {data.selectedProducts.map(product => (
            <Product key={product.id} {...product} />
          ))}
        </React.Fragment>
      )
    }
  </Query>
);

export default ShoppingCart;
