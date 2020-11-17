module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('PostTag', [
      {
        id: '0d4171c6-10ba-48ee-829e-28f7f4cece0f',
        postId: '03ab9b0c-1bdd-4f19-9999-4733cb0eeb9a',
        tagId: 'e2041742-bcfb-4a79-8cae-ead7786df2c6',
      },
      {
        id: 'cd60ccea-c47d-4969-950e-db676f59ae1d',
        postId: '9446831c-5962-4539-b312-d9129b2f729f',
        tagId: '99e1742a-08fe-4190-9abc-9e7c6c3a7048',
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('PostTag', null, {});
  },
};
