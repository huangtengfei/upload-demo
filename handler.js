'use strict';

const formidable = require('formidable');
const AVATAR_UPLOAD_FOLDER = '/avatar/';

function handler (req, res) {

	let form = formidable.IncomingForm();
	form.encoding = 'utf-8';
	form.uploadDir = './public' + AVATAR_UPLOAD_FOLDER;
	form.keepExtensions = true;
	form.maxFieldsSize = 2 * 1024 * 1024;

	form.parse(req, function(err, fields, files) {
      	var result = {
      		path: files.myFile.path.replace(/\\/g, '/').replace('public', '')
      	};
      	res.send(JSON.stringify(result));
    });

    return;
}

module.exports = handler;