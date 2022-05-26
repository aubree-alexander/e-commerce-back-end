const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

  // find all categories and its associated products
router.get('/', (req, res) => {
  Category.findAll({include: [Product]})
  .then(categoryResponse => res.status(200).json(categoryResponse))
  .catch(err => res.status(400).json(err)) 
});

//find one category by id and its associated products
router.get('/:id', (req, res) => {
  Category.findOne({include: [Product], where: {id: req.params.id}})
  .then(categoryResponse => res.status(200).json(categoryResponse))
  .catch(err => res.status(400).json(err)) 
});

//create new category
router.post('/', (req, res) => {
  Category.create(req.body)
  .then(categoryResponse => res.status(200).json(categoryResponse))
  .catch(err => res.status(400).json(err)) 
});

//update category by id value
router.put('/:id', (req, res) => {
  Category.update(req.body, {where: {id: req.params.id}})
  .then(categoryResponse => res.status(200).json(categoryResponse))
  .catch(err => res.status(400).json(err)) 
});

//delete category by id value
router.delete('/:id', (req, res) => {
  Category.destroy({where: {id: req.params.id}})
  .then(categoryResponse => res.status(200).json(categoryResponse))
  .catch(err => res.status(400).json(err)) 
});

module.exports = router;
