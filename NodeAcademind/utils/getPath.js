//! Core Modules
const path = require('path');

module.exports = function(pathName) {
        return path.join(__dirname, pathName)
}