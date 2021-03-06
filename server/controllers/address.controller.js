const Address = require('../models/address');

// POST single address
exports.createAddress = async (req, res) => {
  try {
    const createdAddress = await Address.create(req.body);
    res.json(createdAddress);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

// DELETE Address
exports.deleteAddress = async (req, res) => {
  try {
    const { idAddress } = req.params;
    const deletedAddressId = await Address.destroy({
      where: { id: idAddress }
    });
    res.json(deletedAddressId);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};
  