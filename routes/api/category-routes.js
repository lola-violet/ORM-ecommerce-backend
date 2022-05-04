const router = require('express').Router();
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

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
