//npm install tingodb
var Db = require('tingodb')().Db;

var db = new Db('database', {});
//https://github.com/sergeyksv/tingodb/blob/master/test/crud-test.js

var product = require('./product');

// category collection 
var categoryCollection = db.collection("category");

//insertCategory({categoryname:'category 4'});
//updateCategory({categoryid : 4, categoryname: "category 4"});
//removeCategory(5);
/*getCategory(3,function(err,data) {
	if(err) {
		console.log("errror " , err);
		return;
	}
	console.log(data);
});*/

/*getAllCategory(function(err,data) {
	if(err) {
		console.log("errror " , err);
		return;
	}
	console.log(data);
});*/

module.exports = 
{
	insertCategory : function(categoryObj,callback) {
		console.log(categoryObj);
	   categoryCollection.insert(categoryObj,
		  function(err, results) {
			console.log(err, results);
			if(callback){
				callback(err,results);
			}
	   });
	},

	updateCategory : function(categoryObj,callback) {
	   categoryCollection.update(
		  { "_id" : categoryObj._id },
		  { $set: { categoryname: categoryObj.categoryname,
				  description: categoryObj.description} },
		  function(err, results) {
			if(callback){
				callback(err,results);
			}
	   });
	},

	removeCategory : function(categoryid,callback) {
		console.log(categoryid);
		product.getProductByCategory(categoryid,function(err,products) {
			if(products.length === 0){
				categoryCollection.remove(
				  	{ "_id" : categoryid },
				  	function(err, results) {
						if(callback){
							callback(err,results);
						}
				   });
				
			}else{
				if(callback){
					callback("can't able to delete this category",null);
				}
			}
		});
	   	
	},
	
	getAllCategory : function(callback){
		categoryCollection.find().toArray(function(err, docs) {
			if(callback){
				callback(null,docs);
			}
		});
	},

	getCategory : function(categoryid,callback){
		categoryCollection.findOne({_id : categoryid }, function(err, doc) {
			if(callback){
				callback(null,doc);
			}
		});
	}
}

