import { FinanceTransaction } from '../../models';

class financeController {
  static createTransaction = async (req, res) => {
    try {
      const {
        title,
        debit_amount,
        credit_amount,
        description,
        finance_account_type_id,
        finance_account_name,
      } = req.body;

      const createNewTransaction = FinanceTransaction.create({
        title,
        debit_amount,
        credit_amount,
        description,
        finance_account_type_id,
        finance_account_name,
      });

      return res.status(200).send({ message: 'Succes add new transaction' });
    } catch (e) {
      return res.status(500).send(e);
    }
  };

  static getAllData = async (req, res) => {
    try {
      const getAllData = await FinanceTransaction.findAll();

      return res.status(200).json(getAllData);
    } catch (e) {
      return res.status(500).send(e);
    }
  };

  static updateData = async (req, res) => {
    try {
      const { finance_account_id } = req.params;
      const {
        title,
        debit_amount,
        credit_amount,
        description,
        finance_account_type_id,
        finance_account_name,
      } = req.body;

      const findingData = await FinanceTransaction.findOne({
        where: { finance_account_id },
      });

      console.log(findingData);

      if (!findingData) {
        return res.status(404).json({ message: 'Transaction not found' });
      }

      const updateTransaction = await FinanceTransaction.update(
        {
          title,
          debit_amount,
          credit_amount,
          description,
          finance_account_type_id,
          finance_account_name,
        },
        { where: { finance_account_id } }
      );

      return res.status(200).send({ message: 'Succes update transaction' });
    } catch (e) {
      return res.status(500).send(e);
    }
  };

  static deleteTransaction = async (req, res) => {
    const { finance_account_id } = req.params;

    const findTransaction = await FinanceTransaction.findOne({
      where: { finance_account_id },
    });

    if (!findTransaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }

    const deleted = await FinanceTransaction.destroy({
      where: { finance_account_id },
    });

    return res.status(200).send({ message: 'Succes delete transaction' });
  };
}

export default financeController;
