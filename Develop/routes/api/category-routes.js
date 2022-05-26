const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

  // find all categories and its associated products
router.get('/', (req, res) => {
  Category.findAll({include: [Product]})
  .then(categoryResponse => res.status(200).json(categoryResponse))
  .catch(err => res.status(400).json(err)) 
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({include: [Product], where: {id: req.params.id}})
  .then(categoryResponse => res.status(200).json(categoryResponse))
  .catch(err => res.status(400).json(err)) 
});

router.post('/', (req, res) => {
  // create a new category
  //req.body stands for all the columns of this specific table
  Category.create(req.body)
  .then(categoryResponse => res.status(200).json(categoryResponse))
  .catch(err => res.status(400).json(err)) 
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {where: {id: req.params.id}})
  .then(categoryResponse => res.status(200).json(categoryResponse))
  .catch(err => res.status(400).json(err)) 
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  //don't need req.body here! destroy knows to take req.body without us explicitly saying so
  Category.destroy({where: {id: req.params.id}})
  .then(categoryResponse => res.status(200).json(categoryResponse))
  .catch(err => res.status(400).json(err)) 
});

module.exports = router;
