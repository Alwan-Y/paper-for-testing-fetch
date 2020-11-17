module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Post', [
      {
        id: '03ab9b0c-1bdd-4f19-9999-4733cb0eeb9a',
        title: 'Alpha Title',
        body: 'Hello Alpha',
        authorId: 'c4cb353b-0f1e-455b-b634-562a6d39bc90',
      },
      {
        id: '9446831c-5962-4539-b312-d9129b2f729f',
        title: 'Beta Title',
        body: 'Hello Beta',
        authorId: '61dfc472-f3c2-4c99-a40f-b190cef9a8b6',
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Post', null, {});
  },
};

