example
=======

simple 
------

```
#!/usr/bin/env node
var munin = require('../');
var main = function(){
    var g = new munin.Graph('game object count','count','game');
    g.add(new munin.Model.Default('player').setValue(100));
    g.add(new munin.Model.Default('monster').setValue(256));
    g.add(new munin.Model.Default('npc').setValue(5));
    g.sortValue();
    munin.create(g);
}
main();
```
