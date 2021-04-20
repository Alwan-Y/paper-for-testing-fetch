module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'FinanceAccount',
      [
        {
          finance_account_id: '998f5d04-aadd-4369-b9d6-535474dca4a5',
          name: 'Breakfast Expenses',
          description: 'Akun untuk biaya sarapan',
          type: 'expenses',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('FinanceAccount', null, {});
  },
};
