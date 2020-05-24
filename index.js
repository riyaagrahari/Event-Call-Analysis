const config = require('./config.json');
const input = require('./input.json');
var fs = require('fs');
rate = config['rate_of_event']

function makeEvent() {
    events = []
    timestamp = new Date().toUTCString();
    var sec = timestamp.split(" ")[4].split(":")[2]
    for (i = 0; i < rate && sec == timestamp.split(" ")[4].split(":")[2]; i++) {
        var event_id
        var event_id_rand_no = Math.floor((Math.random() * 3))
        // console.log(event_id_rand_no)
        if (event_id_rand_no == 0) event_id = 'signup'
        else if (event_id_rand_no == 1) event_id = 'User-event'
        else event_id = 'logout'
        var track_id = Math.ceil(Math.random() * 10);
        var obj = input["tracking-ids"][track_id]
        var eventObj = "";
        eventObj = JSON.stringify(event_id);
        eventObj = eventObj + ","+JSON.stringify(input['tracking-ids'][track_id]);
        eventObj = eventObj + ","+JSON.stringify(timestamp.split(" ")[4])+"\n";
        fs.appendFileSync('output.log',eventObj)
    }
    setInterval(makeEvent, 1000);
}

makeEvent()
