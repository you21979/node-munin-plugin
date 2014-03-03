exports.create = require('./lib/main');
exports.Graph = require('./lib/graph');
exports.Model = require('./lib/model');
var fs = require('fs');
exports.jsonFileRead = function(filename, callback){
    fs.readFile(filename, 'utf-8', function(err, val){
        if(err){
            return callback(err, val);
        }
        try{
            var j = JSON.parse(val);
            callback(null, j);
        }catch(err){
            callback(err, val);
        }
    });
};
