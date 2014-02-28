var dispatch = require('./dispatch');
var Graph = require('./graph');
var Model = require('./model');

var create = module.exports = function(graph){
    _main(function(callback){
        callback(graph.getParam());
    },function(callback){
        callback(graph.list.getMuninParams());
    },function(callback){
        callback(graph.list.getMuninValues());
    });
};
var _main = function(graph_init, model_init, value_func){
    dispatch(graph_init, model_init, value_func);
};

if(!module.parent){
    var g = new Graph('Room Temperature','temp','Home');
    g.add(new Model.Temperature('Room 1F.papa').setValue(10));
    g.add(new Model.Temperature('Room 1F.mama').setValue(10));
    g.add(new Model.Temperature('Room 1F.child').setValue(60));
    g.add(new Model.Temperature('Room 3F').setValue(25));
    g.add(new Model.Temperature('Room 2F').setValue(20));
    g.sortLabel();
    create(g);
}
