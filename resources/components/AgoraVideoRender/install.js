'use strict';
/**
* 云组件安装自定义安装拓展脚本
* @param {String} params.assetsPath 云组件复制到资源管理器的根路径 db://assets/cloud-component/${云组件名称}
* @param {String} params.cloudPath 云函数复制到云函数管理的根路径 @{当前项目}/serverless/cloud-function/${当前环境ID}
* @param {String} params.envID ${当前环境ID}
* @param {(err?) => {}} callback 自定义操作完成之后的回调，必须调用，否则会撤销云组件复制工作
*/
exports.main = (params, callback) => {
    callback();
};
