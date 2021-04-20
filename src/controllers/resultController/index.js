import { Result } from '../../models';

const notTaxable = [
  'book',
  'chocolate bar',
  'packet of headache pills',
  'Chocolate',
];
const importTax = ['imported box of chocolates', 'box of imported chocolates'];
const ppnPlusImportTax = ['imported bottle of perfume'];

class resultController {
  static addItems = async (req, res) => {
    const { name, itemName, amount } = req.body;

    const createNewItems = await Result.create({
      name,
      itemName,
      amount,
    });

    return res.status(200).send({ message: 'Succes add new items' });
  };

  static getTax = async (req, res) => {
    const { name } = req.body;

    const findTotalItems = await Result.findAll({ where: { name } });

    let noTaxItem = [];
    let importTaxItem = [];
    let doubleTaxItem = [];
    let ppnItem = [];
    let totalTaxAmount = 0;

    const findTaxAndNewAmount = (arrayDestination, item, taxRate) => {
      let findTax = item.amount * taxRate;
      let newAmount = item.amount + findTax;
      totalTaxAmount = totalTaxAmount + findTax;

      arrayDestination.push({
        name: item.itemName,
        amount: newAmount,
      });
    };

    findTotalItems.forEach((item) => {
      if (notTaxable.includes(item.itemName)) {
        noTaxItem.push({
          name: item.itemName,
          amount: item.amount,
        });
      } else if (importTax.includes(item.itemName)) {
        findTaxAndNewAmount(importTaxItem, item, 0.05);
      } else if (ppnPlusImportTax.includes(item.itemName)) {
        findTaxAndNewAmount(doubleTaxItem, item, 0.15);
      } else {
        findTaxAndNewAmount(ppnItem, item, 0.1);
      }
    });

    let totalAllArray = [
      ...noTaxItem,
      ...importTaxItem,
      ...doubleTaxItem,
      ...ppnItem,
      totalTaxAmount,
    ];

    return res.status(200).json(totalAllArray);
  };
}

export default resultController;
