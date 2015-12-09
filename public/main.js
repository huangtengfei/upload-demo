
var params = {

	formZone: document.getElementById('myForm'),
	imgInput: document.getElementById('imgInput'),
	dropZone: document.getElementById('dropZone'),
	submitBtn: document.getElementById('submitBtn'),
	clearBtn: document.getElementById('clearBtn'),

	dragHoverClass: 'drag-hover',
	imgItemClass: 'img-item',
	
	sizeFilter: 512 * 1024,

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
			a.onclick = (function(file){
				return function() {
					self.onDelete(file);
				}
			})(file);
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

	onSuccess: function(file, result) {
		var uploadInfo = document.getElementById('resultZone');
		var imgUrl = window.location.host + JSON.parse(result).path;
		var p = document.createElement('p');
		p.innerHTML = file.name + ' 上传成功，图片地址是：' + imgUrl;
		uploadInfo.appendChild(p);
		this.onDelete(file);
	},

	onFailure: function(file) {
		var uploadInfo = document.getElementById('resultZone');
		var p = document.createElement('p');
		p.innerHTML = file.name + ' 上传失败';
		p.style.color = 'red';
		uploadInfo.appendChild(p);
		var div = document.getElementById('uploadFile_' + file.index);
		var elem = div.getElementsByTagName('img')[0];
		elem.style.opacity = 0.2;
	},

	onDelete: function(file) {
		var files = HTFUpload.uploadFiles;
		var elem = document.getElementById('uploadFile_' + file.index);
		elem.style.display = 'none';
		files.splice(files.indexOf(file), 1);
	}
}

HTFUpload.init(params);


