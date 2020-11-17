module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tag', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tag')
  },
}
