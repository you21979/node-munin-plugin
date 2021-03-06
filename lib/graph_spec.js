var GraphSpec = module.exports = function(title, vlabel, category){
    this.title = title;
    this.vlabel = vlabel;
    this.category = category;
    this.scale = 'no';
    this.info = '';
    this.args = {};
};
GraphSpec.prototype.setScale = function(val){
    this.scale = (val === true ? 'yes' : 'no');
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
GraphSpec.prototype.setInfo = function(val){
    this.info = val;
};
GraphSpec.prototype.getParam = function(){
    var param = {
        'graph_title' : this.title,
        'graph_vlabel' : this.vlabel,
        'graph_category' : this.category,
        'graph_scale' : this.scale,
        'graph_info' : this.info,
    };
    var args = '';
    for(var key in this.args){
        args = args + key + ' ' + this.args[key] + ' ';
    }
    param['graph_args'] = args;
    return param;
};
GraphSpec.prototype.getMultiGraph = function(){
    return this.title;
};
