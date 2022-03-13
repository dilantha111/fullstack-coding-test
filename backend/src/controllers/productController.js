const { listProducts, udpateProductStatus } = require("../services/productService");

async function getProducts(req, res) {
  const products = await listProducts();

  res.json({ products });
}

async function updateProductStatus(req, res) {
  try {
    const { status } = req.body;
    const { id } = req.params;
    await udpateProductStatus(id, status);
    res.json({ udpated: true });
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  getProducts,
  updateProductStatus
};