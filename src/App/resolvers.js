const resolvers = {
  Mutation: {
    openModalMutation: (_, args, { cache }) => {
      cache.writeData({ data: { isModalOpen: true }});
      return null;
    },
  },
};

export default resolvers;
