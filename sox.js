// taken from https://github.com/CollectionFS/Meteor-cfs-graphicsmagick
// Checks for sox in the path instead of cfs-graphicsmagick

var soxnode = Npm.require('sox-audio');
var path = Npm.require('path');
var fs = Npm.require('fs');
var command;

sox = function (){
	throw new Error('Could not find sox!');
};

var soxAvailable = false;

var binaryPaths = process.env['PATH'].split(/:|;/);


for (var i = 0; i < binaryPaths.length; i++) {


	var binPath = binaryPaths[i];

	if(!soxAvailable){
		var soxPath = path.join(binPath, 'sox');
		var soxExePath = path.join(binPath, 'sox.exe');


		soxAvailable = fs.existsSync(soxPath) || fs.existsSync(soxExePath);


		if(soxAvailable) console.log("--- sox found ---")

	}

}

if (!soxAvailable){
		console.warn("could not find sox in your path!")

		sox.isAvailable = false;
	}else{
		if(soxAvailable){
			sox = soxnode;

			//command = sox();

		}

		sox.isAvailable = true;
}
