const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FinanceTransaction extends Model {
    static associate(models) {
      // define association here
    }
  }
  FinanceTransaction.init(
    {
      finance_account_id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      finance_account_type_id: {
        primaryKey: false,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      debit_amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      credit_amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      finance_account_name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'FinanceTransaction',
    }
  );
  return FinanceTransaction;
};
