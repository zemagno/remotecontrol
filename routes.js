var router = require('express').Router();


var controller = require('./controllers/commandController');


// router.get('/', function(request,response){
// 	// response.send('hello world');
// 	response.json({msg:'Hello world'});
// })

router.get('/', function(request,response){
	// response.send('hello world');

	response.json({msg:'Hello world !!'});
})



router.get('/cmd/:_controle', controller.receiveCommand);
// router.get('/config',controller.getAll);
// router.post('/config', controller.create);
// router.put('/config/:_id', controller.update);
// router.delete('/config/:_id', controller.delete);



module.exports = router;