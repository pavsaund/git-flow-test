(function(){
	"use strict"

	//this is a self-executing function that doing...well..nothing! :)

	var self = this;

	this.execute = function(){
		console.log("LongRun starting");
		for (var i = 5; i >= 0; i--) {
			console.log("iteration: " + i);
		};
	};

})();