var normalScale = exports.normalScale = function(title,vlabel,category){
    return {
        graph_title: title,
        graph_args: '--base 1000 -l 0',
        graph_vlabel: vlabel,
        graph_category: category,
        graph_scale: 'yes',
    };
};
