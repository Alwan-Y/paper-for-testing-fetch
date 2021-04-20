import express from 'express';
import FinanceTransaction from '../../controllers/financeTransactionController';
import FinanceAccountController from '../../controllers/financeAccountController';

const router = express.Router();

router.post('/finances', FinanceTransaction.createTransaction);
router.get('/finances', FinanceTransaction.getAllData);
router.patch('/finances/:finance_account_id', FinanceTransaction.updateData);
router.delete(
  '/finances/:finance_account_id',
  FinanceTransaction.deleteTransaction
);

router.post('/account', FinanceAccountController.createAccount);
router.get('/account', FinanceAccountController.getAllAccount);
router.patch(
  '/account/:finance_account_id',
  FinanceAccountController.updateAccount
);
router.delete(
  '/account/:finance_account_id',
  FinanceAccountController.deleteAccount
);

export default router;
