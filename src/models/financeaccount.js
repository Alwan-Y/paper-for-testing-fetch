const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FinanceAccount extends Model {
    static associate(models) {
      // define association here
    }
  }
  FinanceAccount.init(
    {
      finance_account_id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'FinanceAccount',
    }
  );
  return FinanceAccount;
};
