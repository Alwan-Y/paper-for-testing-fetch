module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Result',
      [
        {
          id: 'c286b207-6ea5-4df4-9786-ddf7abf26d99',
          name: 'user',
          itemName: 'Chocolate',
          amount: 1000,
        },
        {
          id: 'e5fe6ba6-4ab0-42fe-aab0-ba250ba288c7',
          name: 'user',
          itemName: 'music CD',
          amount: 1499,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Result', null, {});
  },
};
