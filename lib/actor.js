var Actor = module.exports = function(){
    this.obj = {};
};
Actor.prototype.define = function(name, draw, type){
    this.obj[name] = {
        label : name,
        draw : draw,
        type : type,
    };
    return this;
};
Actor.prototype.end = function(name){
    return this.obj;
};
/*
munin_agent(
    createScaleGraph('coin difficulty','difficulty','coin'),
    (new Actor()).define('monacoin','LINE2','GAUGE').end(),
    function(callback){
        client.getInfo(function(err, info) {
            callback({
                monacoin : info.difficulty,
            });
        });
    }
);
*/
