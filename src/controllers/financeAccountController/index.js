import { FinanceAccount } from '../../models';

class FinanceAccountController {
  static createAccount = async (req, res) => {
    try {
      const { name, description, type } = req.body;

      const createNewAccount = await FinanceAccount.create({
        name,
        description,
        type,
      });

      return res.status(200).send({ message: 'Succes add new account' });
    } catch (e) {
      return res.status(500).send(e);
    }
  };

  static getAllAccount = async (req, res) => {
    try {
      const getAllAccount = await FinanceAccount.findAll();

      return res.status(200).json(getAllAccount);
    } catch (e) {
      return res.status(500).send(e);
    }
  };

  static updateAccount = async (req, res) => {
    try {
      const { finance_account_id } = req.params;

      const { name, description, type } = req.body;

      const findData = await FinanceAccount.findOne({
        where: { finance_account_id },
      });

      if (!findData) {
        return res.status(404).json({ message: 'Account not found' });
      }

      const updateAccount = await FinanceAccount.update(
        {
          name,
          description,
          type,
        },
        { where: { finance_account_id } }
      );

      return res.status(200).send({ message: 'Succes update account' });
    } catch (e) {
      return res.status(500).send(e);
    }
  };

  static deleteAccount = async (req, res) => {
    try {
      const { finance_account_id } = req.params;

      const findAccount = await FinanceAccount.findOne({
        where: { finance_account_id },
      });

      if (!findAccount) {
        return res.status(404).json({ message: 'Account not found' });
      }

      const deleted = await FinanceAccount.destroy({
        where: { finance_account_id },
      });

      return res.status(200).send({ message: 'Succes delete Account' });
    } catch (e) {
      return res.status(500).send(e);
    }
  };
}

export default FinanceAccountController;
