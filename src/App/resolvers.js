import gql from 'graphql-tag';

const resolvers = {
  Mutation: {
    openModalMutation: (_, args, { cache }) => {
      cache.writeData({ data: { isModalOpen: true }});
      return null;
    },
    closeModalMutation: (_, args, { cache }) => {
      cache.writeData({ data: { isModalOpen: false }});
      return null;
    },
    addProductToCart: (_, { id, title, price }, { cache }) => {
      const query = gql`
        query ProductsInCart {
          selectedProducts @client {
            id
            title
            price
          }
        }
      `;

      const product = { id, title, price, __typename: 'Product' };
      const data = { selectedProducts: [product] };
      cache.writeQuery({ query, data });
      return null;
    },
  },
};

export default resolvers;
