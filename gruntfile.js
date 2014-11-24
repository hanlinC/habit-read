module.exports = function(grunt) {

    // All configuration goes here.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: ['dist/'], // Removes old data

        concat: {
            // Concat task configuration goes here.
            options: {
                // define a string to put between each file in the concatenated output
                separator: ';'
            },
            dist: {
                src: [
                    'js/libs/*.js', // All JS in the libs folder
                    'js/main.js'  // This specific file
                ],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },

        uglify: {
            // Uglify task configuration goes here.
            options: {
                // the banner is inserted at the top of the output
                banner: '/*! <%= pkg.name %> <%= pkg.os %> <%= grunt.template.today("dd-mm-yyyy") %> */\n' + 
                        '/*! <%= pkg.jsresource %> */\n'
            },
            dist: {
                files: {
                    // <%= concat.dist.dest %> is used so uglify will minify the file that the concat task produces.
                    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },

        imagemin: {
            // Imagemin task configuration goes here.
            dynamic: {
                files: [{
                    expand: true, // Enable dynamic expansion
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/img/'
                }]
            }
        },

        svgmin: {
            // svgmin task configuration goes here.
            options: {
                plugins: [
                { removeViewBox: false },
                { removeUselessStrokeAndFill: false }
                ]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.svg'],
                    dest: 'dist/img/',
                }]
            }
        },

        sass: {
            // Sass task configuration goes here.
            dist: {
                options: {
                    style: 'compressed',
                    // the banner is inserted at the top of the output
                    banner: '/*! <%= pkg.name %> <%= pkg.os %> <%= grunt.template.today("dd-mm-yyyy") %> */\n' + 
                            '/*! <%= pkg.cssresource %> */\n'
                },
                files: {
                    'dist/css/main.min.css': 'css/main.scss'
                }
            }
        },

        shell: {
            // Shell task configuration goes here.
            jekyllServe: {
                command: 'jekyll serve'
            },
            jekyllBuild: {
                command: 'jekyll build'
            }
        },

        watch: {
            // Watch task configuration goes here.
            scripts: {
                files: ['js/*.js'],
                task: ['concat', 'uglify', 'shell:jekyllBuild'],
                options: {
                    spawn: false,
                }
            },

            css: {
                files: ['css/*.scss'],
                tasks: ['sass', 'shell:jekyllBuild'],
                options: {
                    spawn: false,
                }
            },

            site: {
                files: ['index.html', 'toc.html', 'submit.html', 'about.html', '_includes/*.html', '_layouts/*.html', '_posts/*.{html,md}'],
                tasks: ['shell:jekyllBuild'],
                options: {
                    spawn: false,
                }
            } //, add comma when adding more watch tasks
        } // , add comma when adding more tasks
    });

    // Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-svgmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Tell Grunt what to do when we type "grunt watchpls" into the terminal.
    grunt.registerTask('watchpls', ['shell:jekyllServe',]);

    // Tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['clean', 'concat', 'uglify', 'imagemin', 'svgmin', 'sass', 'shell:jekyllBuild', 'watch']);
};
// HELP
// http://gruntjs.com/sample-gruntfile
// http://24ways.org/2013/grunt-is-not-weird-and-hard/
// http://stackoverflow.com/questions/22285942/grunt-throw-recursive-process-nexttick-detected
// http://blog.toggl.com/2014/04/svg-icon-build-system-using-grunt-grunticon/