
var params = {

	formZone: document.getElementById('myForm'),
	imgInput: document.getElementById('imgInput'),
	dropZone: document.getElementById('dropZone'),
	submitBtn: document.getElementById('submitBtn'),
	clearBtn: document.getElementById('clearBtn'),
	
	dragHoverClass: 'drag-hover',

	onSelect: function (files) {
		var preview = document.getElementById('previewZone');
		for(var i = 0; i < files.length; i++){
			var file = files[i];

			var div = document.createElement('div'),
				img = document.createElement('img'),
				p = document.createElement('p');

			div.classList.add('img-item');
			preview.appendChild(div);

			img.file = file;
			div.appendChild(img);

			p.innerText = file.name;
			div.appendChild(p);	

			var reader = new FileReader();
			reader.onload = (function(img, p) {
				return function(e){
					img.src = e.target.result;

				}
			})(img, p);
			reader.readAsDataURL(file);
		}	
	}
}

HTFUpload.init(params);


