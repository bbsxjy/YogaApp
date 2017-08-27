module.exports = function(grunt) {
    "use strict";

    grunt.initConfig({
        copy: {
            build: {
                files: [
                    {
                        expand: true,
                        cwd: "./server/public",
                        src: ["**"],
                        dest: "./server/dist/public"
                    },
                    {
                        expand: true,
                        cwd: "./server/views",
                        src: ["**"],
                        dest: "./server/dist/views"
                    }
                ]
            }
        },
        ts: {
            app: {
                files: [{
                    src: ["server/\*\*/\*.ts", "!server/.baseDir.ts"],
                    dest: "./server/dist"
                }],
                options: {
                    module: "commonjs",
                    target: "es6",
                    sourceMap: false,
                    rootDir: "server"
                }
            }
        },
        watch: {
            ts: {
                files: ["server/\*\*/\*.ts"],
                tasks: ["ts"]
            },
            views: {
                files: ["server/views/**/*.pug"],
                tasks: ["copy"]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-ts");

    grunt.registerTask("default", [
        "copy",
        "ts"
    ]);

};