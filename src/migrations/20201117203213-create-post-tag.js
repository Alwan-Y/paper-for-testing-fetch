module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostTag', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      postId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Post',
          key: 'id',
        },
      },
      tagId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Tag',
          key: 'id',
        },
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PostTag')
  },
}
