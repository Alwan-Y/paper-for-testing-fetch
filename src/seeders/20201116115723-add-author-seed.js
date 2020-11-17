module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Author', [
      {
        id: 'c4cb353b-0f1e-455b-b634-562a6d39bc90',
        name: 'Alpha',
        gender: 'm',
      },
      {
        id: '61dfc472-f3c2-4c99-a40f-b190cef9a8b6',
        name: 'Beta',
        gender: 'f',
      },
      {
        id: '17d8679f-b7ad-429b-9a87-d8a5925c4e32',
        name: 'Charlie',
        gender: 'm',
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Author', null, {});
  },
};