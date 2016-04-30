//npm install express
var express = require('express');

//npm install body-parser
var bodyParser = require('body-parser');

var app = express();

var fs = require("fs");

var router = express.Router();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use('/api', router);

var category = require('./category');
var product = require('./product');

// middleware to use for all requests
router.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	//res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  	//res.header("Access-Control-Allow-Headers", "X-Requested-With");
    // do logging
    next(); // make sure we go to the next routes and don't stop here
});


////////////////////////////////////////////////////////////////////////////////////
//////////////////////// Category //////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
router.get('/listCategories', function (req, res) {
	category.getAllCategory(function(err,data) {
		//console.log(data);
		res.send(data);
	});
});

router.post('/getCategory', function(req, res) {
	category.getCategory(req.body.categoryid, function(err,data) {
		res.send(data);
	});
});

router.post('/addCategory', function(req, res) {
	category.insertCategory(req.body, function(err,data) {
		res.send(
            (err === null) ? { msg: 'success' } : { msg: err }
        );
	});
});

router.put('/editCategory', function(req, res) {
	category.updateCategory(req.body, function(err,data) {
		res.send(
            (err === null) ? { msg: 'success' } : { msg: err }
        );
	});
});

router.delete('/deleteCategory', function(req, res) {
	category.removeCategory(req.query.categoryid, function(err,data) {
		res.send(
            (err === null) ? { msg: 'success' } : { msg: err }
        );
	});
});
////////////////////////////////////////////////////////////////////////////////////
//////////////////////// Product //////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
router.get('/listProducts', function (req, res) {
	product.getAllProduct(function(err,data) {
		//console.log(data);
		res.send(data);
	});
})

router.post('/getProduct', function(req, res) {
	product.getProduct(req.body.productid, function(err,data) {
		res.send(data);
	});
	
});

router.post('/addProduct', function(req, res) {
	product.insertProduct(req.body, function(err,data) {
		res.send(
            (err === null) ? { msg: 'success' } : { msg: err }
        );
	});
});

router.put('/editProduct', function(req, res) {
	product.updateProduct(req.body, function(err,data) {
		res.send(
            (err === null) ? { msg: 'success' } : { msg: err }
        );
	});
});

router.delete('/deleteProduct', function(req, res) {
	product.removeProduct(req.query.productid, function(err,data) {
		res.send(
            (err === null) ? { msg: 'success' } : { msg: err }
        );
	});
});


var server = app.listen(8085, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
 
});