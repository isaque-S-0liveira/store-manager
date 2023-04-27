const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require("sinon-chai");

chai.use(sinonChai);

const { expect } = chai

const productSevice = require('../../../src/services/productsService');
const productsController = require('../../../src/controllers/productsController');
const { allProductsMock, getProductId } = require('../mock/products.mock');

describe('Product Controller', function () {
  describe('acessa todos os produtos e retorna o status correto', function () {
    afterEach(() => sinon.restore());
    it('com sucesso', async function () {
      sinon.stub(productSevice, 'getAll').resolves(allProductsMock);

      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productsController.getAll(req, res);

      expect(res.status).to.have.been.calledWith(200)
      expect(res.json).to.have.been.calledWith(allProductsMock);
    });
  })
  describe('ao acessa um produto pelo id', function () {
    it('com sucesso', async function () {
      sinon.stub(productSevice, 'getById').resolves(getProductId[0]);
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      req.params = sinon.stub().returns(req);


      await productsController.getById(req, res);
      // console.log(res.json);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith({ id: 1, name: 'Martelo de Thor' });
    });
  })
});