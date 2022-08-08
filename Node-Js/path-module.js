
// The node:path module provides utilities for working with file and directory paths.


// TO ADD BUILT-IN PATH MODULE TO OUR FILE
const path = require('path')

console.log(path.sep)

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)






// to print basename of path:
console.log(path.basename('C:\\temp\\myfile.html'))

//to print present woring directory name
console.log(path.dirname('/foo/bar/baz/asdf/quux'))

// to print extension name :
console.log(path.extname(__filename))








// GOTO NODEJS DOCUMENTATION TO SEE MORE DFEATURES OF OS BUIT-IN MODULES