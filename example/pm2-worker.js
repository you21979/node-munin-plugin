var monitor_init = function(){
    if (!('send' in process)) {return;}
    process.on("message", function (msg) {
        if ( "type" in msg && msg.type === "process.getinfo" ) {
            switch(msg.type){
            case "process.getinfo":
                process.send({type:msg.type, data:process.memoryUsage()});
                break;
            default:
                break;
            }
        }
    });
}

setInterval( function () {
  var object = {}
  for (var i = 0; i < 10000; i++) {
    object["key"+i] = Math.random().toString(36).substring(7)
  }
}, Math.round(Math.random()*10000))
