let _ = require('lodash')

let newArray = _.partition([1, 2, 3, 4], n => n % 2);

console.log(newArray)
