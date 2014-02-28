"use strict";
var print = console.log;

var munin_autoconf = function(){
    print('yes');
};
var munin_config = function(label, field){
    for(var key in label){
        print('%s %s', key, label[key]);
    }
    field.forEach(function(v){
        for(var name in v){
            var label = v.label.replace(/ |\./g, '_');
            print('%s.%s %s', label, name, v[name]);
        }
    });
};
var munin_value = function(obj){
    for(var key in obj){
        var label = key.replace(/ |\./g, '_');
        print('%s.value %s', label, obj[key]);
    }
};

var munin_dispatch = module.exports = function( label, field, func ){
    var args = process.argv;
    var opt = args[args.length - 1];
    switch(opt){
    case 'config':
        label(function(l){
            field(function(f){
                munin_config(l,f);
            });
        });
        break;
    case 'autoconf':
        munin_autoconf();
        break;
    default:
        func(munin_value);
        break;
    }
};
