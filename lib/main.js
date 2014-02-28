var dispatch = require('./dispatch');
var Graph = require('./graph');
var Model = require('./model');

var createAgent = module.exports = function(graph){
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
    var g = new Graph('game object count','count','game');
    g.add(new Model.Temperature('Room 1F.1').setValue(10));
    g.add(new Model.Temperature('Room 2F.2').setValue(20));
    g.add(new Model.Temperature('Room 3F.3').setValue(25));
    g.sortValue();                                                                                                                           
    createAgent(g);
}
