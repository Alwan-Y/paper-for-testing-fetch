module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Post', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      body: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      authorId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Author',
          key: 'id',
        },
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Post')
  },
}