module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('FinanceAccount', {
      finance_account_id: {
        type: Sequelize.UUID,
        primaryKey: false,
        allowNull: false,
        unique: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('FinanceAccount');
  },
};
