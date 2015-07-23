var blueprint = require('gulp-blueprint');

blueprint({
    js: {
        sourceFile: 'app/app.js'
    },
    watch: {
        files: [ 'assets/**/*', 'vendor/**/*', 'app/**/*' ]
    }
});