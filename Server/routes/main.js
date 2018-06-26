const router = require('express').Router();
const Category = require('../models/category');

router.route('/categories')
    .get((req, res, next) => {
        Category.find({}, (err, categories) => {
            res.json({
                success: true,
                message: "Success",
                categories: categories
            });
        });
    })
    .post((req, res, next) => {
        let category = new Category();
        category.name = req.body.category;
        let save = category.save();
        
        save.then(() => {
            res.json({
                success: true,
                message: "Successful"
            });
        }).catch((error) => {
            res.json({
                success: false,
                message: error.message
            });
        });
    });
module.exports = router;