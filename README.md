
这是一个图片上传的demo，支持上传预览和多图上传，仅在 chrome(45.0.2454.85) 和 ff(38.0.1) 上测试通过，不支持IE

[查看 demo 效果](http://huangtengfei.github.io/upload-demo/)

## 使用说明

1. 引用 upload.js （不需要依赖任何库）
2. 设置 upload.js 中的开发参数

```
var params = {

    formZone: null,               // 表单区
    imgInput: null,                 // file 控件
    dropZone: null,                 // 拖拽区  
    submitBtn: null,                // 提交按钮
    clearBtn: null,                 // 取消按钮

    uploadFiles: [],                // 待上传文件列表

    dragHoverClass: 'drag-hover',           // 经过拖拽区时的样式
    imgItemClass: 'img-item',               // 预览区的单张图片样式

    typeFilter: ['jpg', 'jpeg', 'png'],     // 图片格式限制   
    sizeFilter: 500 * 1024,                     // 图片大小限制

    onSelect: function() {},                // 获取到选择的文件时触发，更新预览区    
    onSuccess: function() {},               // 单张图片上传成功后触发
    onFailure: function() {},               // 单张图片上传成功后触发  
}

HTFUpload.init(params);
```

## 运行

1. npm install
2. node app.js

