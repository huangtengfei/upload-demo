
var params = {

	formZone: document.getElementById('myForm'),
	imgInput: document.getElementById('imgInput'),
	dropZone: document.getElementById('dropZone'),
	submitBtn: document.getElementById('submitBtn'),
	clearBtn: document.getElementById('clearBtn'),

	dragHoverClass: 'drag-hover',
	imgItemClass: 'img-item',
	
	sizeFilter: 512000,

	onSelect: function (files) {
		var self = this;
		var files = HTFUpload.uploadFiles;
		var preview = document.getElementById('previewZone');
		for(var i = 0; i < files.length; i++){
			var file = files[i];

			var div = document.createElement('div'),
				img = document.createElement('img'),
				br = document.createElement('br');
				span = document.createElement('span'),
				a = document.createElement('a');

			div.classList.add('preview-item');
			div.setAttribute('id', 'uploadFile_' + i);
			preview.appendChild(div);

			img.file = file;
			img.classList.add('img-item');
			div.appendChild(img);
			div.appendChild(br);

			span.innerText = file.name;
			div.appendChild(span);	

			a.innerText = '删除';
			a.setAttribute('href', 'javascript:void(0);');
			a.onclick = (function(index){
				return function() {
					files.splice(index, 1);
					self.onDelete(index);
				}
			})(i);
			div.appendChild(a);

			var reader = new FileReader();
			reader.onload = (function(img) {
				return function(e){
					img.src = e.target.result;
				}
			})(img);
			reader.readAsDataURL(file);
		}	
	},

	onDelete: function(index) {
		var elem = document.getElementById('uploadFile_' + index);
		elem.style.display = 'none';
	}
}

HTFUpload.init(params);


