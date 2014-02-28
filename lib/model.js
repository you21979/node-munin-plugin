var util = require('util');
var DataSpec = require('./data_spec');

var Default = exports.Default = function(label){
    DataSpec.DataSpec.call(this, label);
    this.setDraw('LINE2');
};
util.inherits(Default, DataSpec.DataSpec);

var Temperature = exports.Temperature = function(label){
    DataSpec.DataSpec.call(this, label);
    this.setDraw('LINE2');
};
util.inherits(Temperature, DataSpec.DataSpec);

/*
var l = new DataSpec.DataSpecList();
l.add(new Sample('hoge'));
l.add(new Sample('aaaa'));
l.add(new Sample('zzz'));
l.add(new Sample('pppppp'));
//l.sortLabel();
l.sortValue();
l.getParam().forEach(function(v){
    console.log(v.getParam());
});
*/
