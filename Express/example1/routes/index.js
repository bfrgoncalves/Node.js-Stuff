var express = require('express'); //Requires express
var router = express.Router(); //Creation of the router file which return value is going to be exported using the model.exports 

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res){ // At the root, we are going to listen to get requests (req) and give a response (res)
	// res.send("Text"); //We can send text 
	// res.send({a:200}); //Or JSON objects
	// res.send(200); //Or a number
	//The type will change acording to what we are sending
	// res.render('index',{}) // Uses a redering engine from the viewes folder and we pass the atributes in a json object.
	//The first number will be the http status
	res.render('index',{
		title: 'My App!',
		age: 23
	});

});

// router.get('/', function(req,res){
// 	console.log(req.query); // Object with all the request objects
// });

// router.get('/users/:id', function(req,res){
// 	console.log(req.params); // Get params from that file users.
	//res.send(req.params.id,200);
// });

module.exports = router;
