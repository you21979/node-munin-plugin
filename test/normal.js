var assert = require('assert');
var munin = require('../');
describe('munin', function() {
  beforeEach(function(done) {
    done();
  });

  it('simple', function(done) {
    var g = new munin.Graph('game object count','count','game');
    g.add(new munin.Model.Default('player').setValue(100));
    g.add(new munin.Model.Default('monster').setValue(256));
    g.add(new munin.Model.Default('npc').setValue(5));
    g.sortValue();
    munin.create(g);
    done();
  });
  it('multi', function(done) {
    var a = function(){
        var g = new munin.Graph('game object count','count','game');
        g.add(new munin.Model.Default('player').setValue(100));
        g.add(new munin.Model.Default('monster').setValue(256));
        g.add(new munin.Model.Default('npc').setValue(5));
        g.sortValue();
        return g;
    }
    var b = function(){
        var g = new munin.Graph('game map player count','count','game');
        g.add(new munin.Model.Default('area1').setValue(33));
        g.add(new munin.Model.Default('area2').setValue(29));
        g.add(new munin.Model.Default('area3').setValue(1));
        g.sortValue();
        return g;
    }
    munin.create([a(), b()]);
    done();
  });


});
