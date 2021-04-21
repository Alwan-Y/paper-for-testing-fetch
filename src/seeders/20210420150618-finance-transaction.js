'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'FinanceTransaction',
      [
        {
          finance_account_id: '76dcaf6c-e7a5-4cac-b460-f7431c206367',
          finance_account_type_id: 1,
          description: 'Beban Makan',
          debit_amount: 12000,
          credit_amount: 12000,
          title: 'Beban Makan',
          finance_account_name: "Expenses"
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('FinanceTransaction', null, {});
  },
};
