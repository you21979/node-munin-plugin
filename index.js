var munin = exports;
munin.create = require('./lib/main');
munin.Graph = require('./lib/graph');
munin.Model = require('./lib/model');
var fs = require('fs');
munin.jsonFileRead = function(filename, callback){
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
munin.getScriptName = function(){
    if(process.argv.length === 1){
        return 'noscript';
    };
    var pathlist = process.argv[1].split('/');
    return pathlist[pathlist.length - 1];
};
var modelmap = {
    'default': munin.Model.Default,
    'counter': munin.Model.Counter,
    'temperature': munin.Model.Temperature,
    'rate': munin.Model.Rate,
};
munin.selectModel = function(opt){
    var Model = munin.Model.Default;
    if(opt in modelmap){
         Model = modelmap[opt];
    }
    return Model;
}
