module.exports = function(grunt) {
    require("load-grunt-tasks")(grunt);

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        concat: {
            js: {
                src: [
                    "_/components/js/*.js", //all JS
                    "!_/components/js/_*.js"
                ],
                dest: "_/js/bootstrap.js"
            },
            user: {
                src: [
                    "_/components/js/_*.js" //just user JSs
                ],
                dest: "_/js/myscript.js"
            },
            // 2. Configuration for concatinating files goes here.
            /*less: {
				src: [
					"_/components/less/*.less", //all less
					"!_/components/less/_*.less" // but not the user files
				],
				dest: "_/components/less/_bootstrap.less"
			}*/
        },

        less: {
            framework: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                /*   files: {
                       //src: "_/components/less/bootstrap.less",
                       //cwd: "_",
                       src: "_/components/less/bootstrap.less",
                       dest: "_/css/bootstrap.css" // destination file and source file
                   }*/
                files: {
                    "_/css/bootstrap.css": "_/components/less/bootstrap.less"
                }
            },
            /*development: {
                     options: {
                         paths: ["assets/css"]
                     },
                     files: {"path/to/result.css": "path/to/source.less"}
                 },*/
            user: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: [{
                        src: "_/components/less/_mystyles.less",
                        dest: "_/css/mystyles.css"
                    }, // destination file and source file
                ]
            }
        },

        uglify: {
            js: {
                src: "_/js/bootstrap.js",
                dest: "_/js/bootstrap.min.js"
            },
            user: {
                src: "_/js/myscript.js",
                dest: "_/js/myscript.min.js"
            }
        },

        watch: {
            /*concatLess: {
                files: ["_/components/less/*.less", "!_/components/less/_*.less"], // which files to watch
                tasks: ["concat:lessFramework"],
                options: {
                    nospawn: true
                }
            },*/
            JSFramework: {
                files: ["_/components/js/*.js", "!_/components/js/_*.js"], // which files to watch
                tasks: ["concat:js", "uglify:js"],
                options: {
                    nospawn: true
                }
            },
            JSUser: {
                files: ["_/components/js/_*.js"],
                tasks: ["concat:user", "uglify:user"],
                options: {
                    nospawn: true
                }
            },
            w_lessFramework: {
                files: ["_/components/less/*.less", "!_/components/less/_*.less"], // which files to watch
                tasks: ["less:framework"],
                options: {
                    nospawn: true
                }
            },
            w_lessUser: {
                files: ["_/components/less/_mystyles.less"], // which files to watch
                tasks: ["less:user"],
                options: {
                    nospawn: true
                }
            },
        }

    });

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask("default", ["concat", "less", "uglify", "watch"]);

};
