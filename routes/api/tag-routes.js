const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// GET Request - All tags & their associated products
router.get('/', async (req, res) => {
  try {
    const dbTag = await Tag.findAll({
      include: [Product],
    });
    res.status(200).json(dbTag);
  } catch (err) {
    res.status(500).json({ msg: 'An error has occurred.', err });
  };
});

//GET Request - One tag & its associated products
router.get('/:id', async (req, res) => {
  try {
    const dbTag = await Tag.findByPk(req.params.id, {
      include: [Product],
    });
    res.status(200).json(dbTag);
  } catch (err) {
    res.status(500).json({ msg: 'An error has occurred.', err });
  };
});

// POST Request - Create a new tag
router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag);
  } catch (err) {
    res.status(500).json({ msg: 'An error has occurred.', err });
  }
});

// PUT Request - Update an existing tag by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedTag = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(updatedTag);
  } catch (err) {
    res.status(500).json({ msg: 'An error has occurred.', err });
  }
});

// DELETE Request - Delete an existing tag by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedTag = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(deletedTag);
  } catch (err) {
    res.status(500).json({ msg: 'An error has occurred.', err });
  }
});


module.exports = router;
