var dispatch = require('./dispatch');
var graph = require('./graph');
var Actor = require('./actor');
var main = module.exports = function(graph_init, actor_init, value_func){
    var g = graph_init(graph);
    var a = actor_init(new Actor());

    dispatch(g, a, value_func);
};

if(!module.parent){
    main(function(g){
        return g.normalScale('game object count','count','game');
    },function(act){
        return act
         .define('player','LINE2','GAUGE')
         .define('monster','LINE2','GAUGE')
         .define('npc','LINE2','GAUGE')
         .end();
    },function(callback){
         callback({
             player:100,
             monster:256,
             npc:5,
         });
    });
}
