const router = require('express').Router();
const { del } = require('express/lib/application');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint


// GET Request - All categories & their associated products
router.get('/', async (req, res) => {
  try {
    const dbCategory = await Category.findAll({
      include: [Product],
    });
    res.status(200).json(dbCategory);
  } catch (err) {
    res.status(500).json({ msg: 'An error has occurred.', err });
  };
});

//GET Request - One category & its associated products
router.get('/:id', async (req, res) => {
  try {
    const dbCategory = await Category.findByPk(req.params.id, {
      include: [Product],
    });
    res.status(200).json(dbCategory);
  } catch (err) {
    res.status(500).json({ msg: 'An error has occurred.', err });
  };
});

// POST Request - Create a new category
router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(500).json({ msg: 'An error has occurred.', err });
  }
});

// PUT Request - Update an existing category by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedCategory = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(500).json({ msg: 'An error has occurred.', err });
  }
});

// DELETE Request - Delete an existing category by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedCategory = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(deletedCategory);
  } catch (err) {
    res.status(500).json({ msg: 'An error has occurred.', err });
  }
});

module.exports = router;
