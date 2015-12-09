'use strict';

const formidable = require('formidable');
const AVATAR_UPLOAD_FOLDER = '/avatar/';

function handler (req, res) {

	let form = formidable.IncomingForm();
	form.encoding = 'utf-8';
	form.uploadDir = './public' + AVATAR_UPLOAD_FOLDER;
	form.keepExtensions = true;
	form.maxFieldsSize = 2 * 1024 * 1024;

	form.on('progress', function(bytesReceived, bytesExpected) {
		if(bytesReceived > 10 * 1024) {
			this.emit('error', 'too big');
			return;
		} 
	});

	form.parse(req, function(err, fields, files) {
      	if(err) {
      		res.statusCode = 500;
      	}else {
      		var result = {
	      		path: files.myFile.path.replace(/\\/g, '/').replace('public', '')
	      	};
	      	res.send(JSON.stringify(result));
      	}    	
    });

    return;
}

module.exports = handler;