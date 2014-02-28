var util = require('util');
var GraphSpec = require('./graph_spec');
var DataSpec = require('./data_spec');

var Graph = module.exports = function(title, vlabel, category){
    GraphSpec.call(this, title, vlabel, category);
    this.list = new DataSpec.DataSpecList();
};
util.inherits(Graph, GraphSpec);
Graph.prototype.add = function(v){
    return this.list.add(v);
};
Graph.prototype.sortLabel = function(){
    return this.list.sortLabel();
};
Graph.prototype.sortValue = function(){
    return this.list.sortValue();
};
