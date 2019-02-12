import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ModalContent from './ModalContent';

const MODAL_QUERY = gql`
  query {
    isModalOpen @client
  }
`;

const Modal = () => (
  <Query query={MODAL_QUERY}>
    {
      ({ data }) => data.isModalOpen && (
        <ModalContent />
      )
    }
  </Query>
);

export default Modal;
