
var uploadDrag = document.getElementById('upload-drag');
var preview = document.getElementById('previewArea');

function handleFiles(files) {
	for(var i = 0; i < files.length; i++){
		var file = files[i];

		var div = document.createElement('div');
		var img = document.createElement('img');
		var p = document.createElement('p');

		div.classList.add('img-item');
		preview.appendChild(div);

		img.classList.add('upload-img');
		img.file = file;
		div.appendChild(img);

		p.innerText = file.name;
		p.classList.add('img-name');
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

function clear() {
	document.myForm.reset();
}	

function dragover(e) {
	var elem = e.target || e.srcElement;
	e.stopPropagation();
	e.preventDefault();
	elem.classList.add('drag-hover');
}

function dragleave(e) {
	var elem = e.target || e.srcElement;
	e.stopPropagation();
	e.preventDefault();
	elem.classList.remove('drag-hover');
}

function drop(e) {
	var elem = e.target || e.srcElement;
	var files = e.dataTransfer.files;
	e.stopPropagation();
	e.preventDefault();
	handleFiles(files);
	elem.classList.remove('drag-hover');
}

dropzone.addEventListener('dragover', dragover, false);
dropzone.addEventListener('dragleave', dragleave, false);
dropzone.addEventListener('drop', drop, false);