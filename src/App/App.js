import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import resolvers from './resolvers';
import OpenModalButton from '../OpenModalButton';
import './App.css';

const client = new ApolloClient({
  resolvers,
});

client.cache.writeData({
  data: {
    isModalOpen: false,
  }
});

const App = () => (
  <ApolloProvider client={client}>
    <div className='App'>
      <OpenModalButton />
    </div>
  </ApolloProvider>
);

export default App;
