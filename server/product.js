//npm install tingodb
var Db = require('tingodb')().Db,
    assert = require('assert');

var db = new Db('database', {});

//npm install flow
var flow = require("flow");

//var category = require('./category');

// category collection 
var categoryCollection = db.collection("category");

// product collection 
var productCollection = db.collection("product");



//insertProduct({productname:'product 2', categoryid: 3});
//updateProduct({productid : 4, productname: "product 3", categoryid: 4});
//removeProduct(5);
/*getAllProduct(function(err,data) {
	if(err) {
		console.log("errror " , err);
		return;
	}
	console.log(data);
});*/
/*getProduct(2,function(err,data) {
	if(err) {
		console.log("errror " , err);
		return;
	}
	console.log(data);
});*/

module.exports = 
{
	insertProduct : function(productObj,callback) {
	   productCollection.insert(productObj,
		  function(err, results) {
			if(callback){
				callback(err,results);
			}
	   });
	},
	updateProduct : function(productObj,callback) {
	   productCollection.update(
		  { "_id" : productObj._id },
		  { $set: { productname: productObj.productname, 
					categoryid: productObj.categoryid} },
		  function(err, results) {
			if(callback){
				callback(err,results);
			}
	   });
	},
	removeProduct : function(productid,callback) {
	   productCollection.remove(
		  { "_id" : productid },
		  function(err, results) {
			if(callback){
				callback(err,results);
			}
	   });
	},
	getAllProduct : function(callback){
		var _categories = [];
		var _products = [];
		categoryCollection.find().toArray(function(err, docs) {
			_categories = docs;
			
			productCollection.find().toArray(function(err, productDocs) {
				for(var iProd=0; iProd<productDocs.length; iProd++){
					for(var iCat=0; iCat<_categories.length; iCat++){
						if(productDocs[iProd].categoryid == _categories[iCat]._id){
							productDocs[iProd].categoryname = _categories[iCat].categoryname;
							_products.push(productDocs[iProd]);
							break;
						}
					}
				}
				if(callback){
					callback(null,_products);
				}
			});
		});
		
		
		/*productCollection.find().toArray(function(err, docs) {
			var returnList = new Array();
			flow.serialForEach(docs, function(doc) {
				var serialController = this;
				category.getCategory(doc.categoryid, function(err, data){
						doc.categoryname = data.categoryname;
						returnList.push(doc);
						serialController();
				});
			},
			function () {
				//for each item
			},
			function () {
				//Final
					if(callback){
						callback(null,returnList);
					}
			});
		});*/
	},
	getProduct : function(productid,callback){
		var _categories = [];
		categoryCollection.find().toArray(function(err, docs) {
			_categories = docs;
			productCollection.findOne({_id : productid }, function(err, doc) {
				var objProduct = doc;
				for(var i=0; i<_categories.length; i++){
					if(objProduct.categoryid == _categories[i]._id){
						objProduct.categoryname = _categories[i].categoryname;
						break;
					}
				}
				if(callback){
					callback(null,objProduct);
				}
			});
		});
				
		/*productCollection.findOne({_id : productid }, function(err, doc) {
			var objProduct = doc;
			if(objProduct && objProduct.categoryid){
				category.getCategory(objProduct.categoryid,function(err,dataCategory) {
					objProduct.categoryname = dataCategory.categoryname;
					if(callback){
						callback(null,objProduct);
					}
				});
			}
		});*/
	},
	getProductByCategory : function(categoryid,callback){
		productCollection.find({categoryid : categoryid }).toArray(function(err, docs) {
			if(callback){
				callback(null,docs);
			}
		});
	}
}
