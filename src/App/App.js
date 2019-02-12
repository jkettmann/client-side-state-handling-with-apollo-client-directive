import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import resolvers from './resolvers';
import AddProductToCartButton from '../AddProductToCartButton';
import OpenModalButton from '../OpenModalButton';
import Modal from '../Modal';
import './App.css';

const client = new ApolloClient({
  resolvers,
});

client.cache.writeData({
  data: {
    isModalOpen: false,
    selectedProducts: [],
  }
});

const App = () => (
  <ApolloProvider client={client}>
    <div className='App'>
      <AddProductToCartButton />
      <OpenModalButton />
    </div>
    <Modal />
  </ApolloProvider>
);

export default App;
