module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tag', [
      {
        id: 'e2041742-bcfb-4a79-8cae-ead7786df2c6',
        name: 'education',
      },
      {
        id: '99e1742a-08fe-4190-9abc-9e7c6c3a7048',
        name: 'game',
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tag', null, {});
  },
};
