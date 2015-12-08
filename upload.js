
var HTFUpload = {

	/*开发参数*/
	
	formZone: null, 				// 表单区
	imgInput: null,					// file 控件
	dropZone: null,					// 拖拽区	
	submitBtn: null,				// 提交按钮
	clearBtn: null,					// 取消按钮

	dragHoverClass: 'drag-hover',	// 经过拖拽区时的样式

	typeFilter: ['jpg', 'jpeg', 'png'],		// 图片格式限制	
	sizeFilter: 10240,						// 图片大小限制

	onSelect: function() {},		// 获取到选择的文件时触发，更新预览区		

	/*内置方法*/

	// 所有为 dropZone 添加的事件都会调用此方法，用来添加移除样式
	dragHover: function (e) {
		var elem = e.target || e.srcElement;
		e.stopPropagation();
		e.preventDefault();
		if(e.type === 'dragenter' || e.type === 'dragover') {
			elem.classList.add(this.dragHoverClass);
		}else {
			elem.classList.remove(this.dragHoverClass);
		}
	},

	// 格式和大小过滤
	filterFiles: function(files) {
		var passedFiles = [];
		for(var i = 0; i < files.length; i++) {
			var file = files[i],
				type = file.type.slice(file.type.lastIndexOf('/') + 1),
				size = file.size;

			if(this.typeFilter.indexOf(type) == -1) {
				alert(file.name + ' 格式不符合要求');
			}else if(this.sizeFilter < size) {
				alert(file.name + ' 大小不符合要求');
			}else {
				passedFiles.push(file);
			}
		}
		return passedFiles;
	},

	// 拖拽释放，获取选择的文件
	getFiles: function (e) {
		this.dragHover(e);
		var files = e.target.files || e.dataTransfer.files;
		this.onSelect(this.filterFiles(files));
	},

	// 清除选择的文件
	clear: function () {
		if(this.formZone) {
			this.formZone.reset();
		}
	},

	// 使用开发参数进行初始化，并绑定事件
	init: function (options) {

		var self = this;

		if(options){
			Object.keys(options).forEach(function(k){
				self[k] = options[k];
			})
		}

		if(this.dropZone) {
			this.dropZone.addEventListener('dragenter', function(e) { self.dragHover(e); }, false);
			this.dropZone.addEventListener('dragover', function(e) { self.dragHover(e); }, false);
			this.dropZone.addEventListener('dragleave', function(e) { self.dragHover(e); }, false);
			this.dropZone.addEventListener('drop', function(e) { self.getFiles(e); }, false);
		}
		if(this.imgInput) {
			this.imgInput.addEventListener('change', function(e) { self.getFiles(e); }, false);
		}
		if(this.clearBtn) {
			this.clearBtn.addEventListener('click', function(e) { self.clear(e); }, false);
		}
	}

};
