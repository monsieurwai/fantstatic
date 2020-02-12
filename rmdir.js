var rmdir = require('rmdir');
var path = './';

rmdir(path + 'dist', function (err, dirs, files) {
  console.log(dirs);
  console.log(files);
  console.log('all files are removed');
});