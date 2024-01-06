const fse = require('fs-extra');

const array = fse.readJSONSync('./filteredData.txt');
console.log(array);