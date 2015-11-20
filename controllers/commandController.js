var commandController = {};

commandController.receiveCommand = function(request,response){
	var _controle = request.params._controle;
	console.log(_controle);
	response.json("ok");
};



module.exports = commandController;
