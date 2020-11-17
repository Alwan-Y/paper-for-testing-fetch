module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Author', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allownull: false,
        unique: true
      },
      name: {
        type: Sequelize.STRING,
        allownull: false
      },
      gender: {
        type: Sequelize.ENUM,
        values: ['m', 'f']
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Author');
  },
};
