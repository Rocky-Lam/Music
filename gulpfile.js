const { series, src, dest, watch} = require('gulp');
const htmlClean = require('gulp-htmlclean');
const less = require('gulp-less');
const cleanCss = require('gulp-clean-css');
const stripDebug = require('gulp-strip-debug');
const uglify =  require('gulp-uglify');
const imageMin =  require('gulp-imagemin');
const connect = require('gulp-connect');


const floder = {
    src:'src/',
    dist:'dist/'
}


function html(){
    return src(floder.src+'html/*')
    .pipe(htmlClean())
    .pipe(dest(floder.dist+'html/'))
    .pipe(connect.reload());
}

function css(){
    return src(floder.src+'css/*')
    .pipe(less())
    .pipe(cleanCss())
    .pipe(dest(floder.dist+'css/'))
    .pipe(connect.reload());
}

function js(){
    return src(floder.src+'js/*')
    // .pipe(stripDebug())
    // .pipe(uglify())
    .pipe(dest(floder.dist+'js/'))
    .pipe(connect.reload());
}

function image(){
    return src(floder.src+'images/*')
    .pipe(dest(floder.dist+'images/'))
}

function server(cb){
    connect.server({
        port:'1573',
        livereload:true
    });
    cb()
}

watch(floder.src+'html/*',function(cb){
    html();
    cb();
})
watch(floder.src+'css/*',function(cb){
    css();
    cb();
})
watch(floder.src+'js/*',function(cb){
    js();
    cb();
})
exports.default =  series(html,css,js,image,server);