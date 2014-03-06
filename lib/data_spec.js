var DataSpecList = exports.DataSpecList = function(){
    this.lists = [];
};
DataSpecList.prototype.add = function(val){
    this.lists.push(val);
};
DataSpecList.prototype.sortLabel = function(){
    this.lists.sort(function(a, b){
        return a.label.localeCompare(b.label);
    });
};
DataSpecList.prototype.sortValue = function(){
    this.lists.sort(function(a, b){
        return a.value < b.value;
    });
};
DataSpecList.prototype.getMuninParams = function(){
    var r = [];
    this.lists.forEach(function(v){
        var p = v.getParam();
        //p.label = p.label.replace(/ |\./g, '_');
        r.push(p);
    });
    return r;
};
DataSpecList.prototype.getMuninValues = function(){
    var r = {};
    this.lists.forEach(function(v){
        //var label = v.label.replace(/ |\./g, '_');
        //r[label] = v.value;
        r[v.label] = v.value;
    });
    return r;
};

var DataSpec = exports.DataSpec = function( label ){
    this.label = label;
    this.draw = 'LINE2';
    this.type = 'GAUGE';
    this.value = 0;
    this.args = {}
};
DataSpec.prototype.setMin = function(val){
    this.args['min'] = val;
    return this;
};
DataSpec.prototype.setMax = function(val){
    this.args['max'] = val;
    return this;
};
DataSpec.prototype.setDraw = function(val){
/*
 LINE1
 LINE2
 LINE3
 AREA
 STACK
*/
    this.draw = val;
    return this;
};
DataSpec.prototype.setType = function(val){
/*
 GAUGE
 COUNTER
 DERIVE
 ABSOLUTE
*/
    this.type = val;
};
DataSpec.prototype.setValue = function(val){
    this.value = val;
    return this;
};
DataSpec.prototype.setWarning = function(val){
    this.args['warning'] = val;
    return this;
};
DataSpec.prototype.setCritical = function(val){
    this.args['critical'] = val;
    return this;
};
DataSpec.prototype.getParam = function(){
    var param = {
        'label': this.label,
        'draw' : this.draw,
        'type' : this.type,
    };
    for(var key in this.args){
        param[key] = this.args[key];
    }
    return param;
};
DataSpec.prototype.getValue = function(){
    return this.value;
};
