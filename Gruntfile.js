module.exports = function(grunt) {
    'use strict';

    var config = grunt.file.readJSON('package.json'); //读取 package.json 配置


    var obj = {}; //初始化对象
    var connect = obj.connect = {}; //web server


    //配置包
    obj.pkg = config;


    // http服务配置
    connect.server = {
        options: {
            port: '80',
            base: './',
            hostname: '*',
            keepalive: true,
            open: true,
        }
    }



    grunt.initConfig(obj);



    //激活插件
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('server', function() {
        grunt.task.run('connect')
    });
}