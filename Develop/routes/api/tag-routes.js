const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

//find all tags and associated Product data
router.get('/', (req, res) => {
  Tag.findAll({include: [{model: Product, through: ProductTag}]})
  .then(categoryResponse => res.status(200).json(categoryResponse))
  .catch(err => res.status(400).json(err)) 
});

//find single tag by id, and include associated product data
router.get('/:id', (req, res) => {
  Tag.findOne({include: [{model: Product, through: ProductTag}], where: {id: req.params.id}})
  .then(categoryResponse => res.status(200).json(categoryResponse))
  .catch(err => res.status(400).json(err)) 
});

//create new tag
router.post('/', (req, res) => {
  Tag.create(req.body)
  .then(categoryResponse => res.status(200).json(categoryResponse))
  .catch(err => res.status(400).json(err)) 
});

//update tag's name based on its id value
router.put('/:id', (req, res) => {
  Tag.update(req.body, {where: {id: req.params.id}})
  .then(categoryResponse => res.status(200).json(categoryResponse))
  .catch(err => res.status(400).json(err)) 
});

//delete tag based on its id
router.delete('/:id', (req, res) => {
  Tag.destroy({where: {id: req.params.id}})
  .then(categoryResponse => res.status(200).json(categoryResponse))
  .catch(err => res.status(400).json(err)) 
});

module.exports = router;
