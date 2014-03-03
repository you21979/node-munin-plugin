var util = require('util');
var DataSpec = require('./data_spec');

var Default = exports.Default = function(label){
    DataSpec.DataSpec.call(this, label);
    this.setDraw('LINE2');
    this.setType('GAUGE');
};
util.inherits(Default, DataSpec.DataSpec);

var Temperature = exports.Temperature = function(label){
    DataSpec.DataSpec.call(this, label);
    this.setDraw('LINE2');
    this.setType('GAUGE');
};
util.inherits(Temperature, DataSpec.DataSpec);

var Counter = exports.Counter = function(label){
    DataSpec.DataSpec.call(this, label);
    this.setDraw('AREA');
    this.setType('COUNTER');
};
util.inherits(Counter, DataSpec.DataSpec);

var Rate = exports.Rate = function(label){
    DataSpec.DataSpec.call(this, label);
    this.setDraw('LINE2');
    this.setType('GAUGE');
    this.setMin(0);
    this.setMax(100);
};
util.inherits(Counter, DataSpec.DataSpec);

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
