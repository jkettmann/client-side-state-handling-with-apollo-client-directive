import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import faker from 'faker';

const ADD_PRODUCT_TO_CART_MUTATION = gql`
  mutation addProductToCart($id: String!, $title: String!, $price: String!) {
    addProductToCart(id: $id, title: $title, price: $price) @client
  }
`;

const getRandomProduct = () => ({
  id: faker.random.uuid(),
  title: faker.commerce.productName(),
  price: `${faker.commerce.price()}$`,
});

const AddProductToCartButton = () => (
  <Mutation mutation={ADD_PRODUCT_TO_CART_MUTATION}>
    {
      addProductToCart => (
        <button onClick={() => addProductToCart({ variables: getRandomProduct() })}>
          Add a product
        </button>
      )
    }
  </Mutation>
);

export default AddProductToCartButton;
