module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('FinanceTransaction', {
      finance_account_id: {
        type: Sequelize.UUID,
        primaryKey: false,
        allowNull: false,
        unique: true,
      },
      finance_account_type_id: {
        type: Sequelize.INTEGER,
        primaryKey: false,
        allowNull: false,
        unique: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      debit_amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      credit_amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('FinanceTransaction');
  },
};
