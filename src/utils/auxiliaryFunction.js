const { insertSale } = require('../models/salesModel');

module.exports = async (saleId, body) => {
   await Promise.all(body.map(async ({ productId, quantity }) => {
    await insertSale(saleId, productId, quantity);
   }));
  return {
    id: saleId,
    itemsSold: body,
  };
};