var GraphSpec = module.exports = function(title, vlabel, category){
    this.title = title;
    this.vlabel = vlabel;
    this.category = category;
    this.scale = 'no';
    this.args = {};
};
GraphSpec.prototype.setScale = function(val){
    this.graph_scale = (val === true ? 'yes' : 'no');
};
GraphSpec.prototype.setLowerLimit = function(val){
    this.args['--lower-limit'] = val;
};
GraphSpec.prototype.setUpperLimit = function(val){
    this.args['--upper-limit'] = val;
};
GraphSpec.prototype.setRigid = function(val){
    if(val){
        this.args['--rigid'] = '';
    }
};
GraphSpec.prototype.getParam = function(){
    var param = {
        'graph_title' : this.title,
        'graph_vlabel' : this.vlabel,
        'graph_category' : this.category,
        'graph_scale' : this.scale,
    };
    var args = '';
    for(var key in this.args){
        args = args + key + ' ' + this.args[key] + ' ';
    }
    param['graph_args'] = args;
    return param;
};
