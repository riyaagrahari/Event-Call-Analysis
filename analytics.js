const fs = require('fs');
try {
    // read contents of the file
    const data = fs.readFileSync('output.log', 'UTF-8');

    // split the contents by new line
    const lines = data.split(/\r?\n/);
    var line_count = 0;
    timestamp = new Date().toUTCString();
    time_hour = timestamp.split(" ")[4].split(":")[0]
    time_min = timestamp.split(" ")[4].split(":")[1]
    time_sec = timestamp.split(" ")[4].split(":")[2]
    var signup = {"totalEventsCaptured":0,"eventsCapturedByTrackingIds":{"trackingId-1": 0, "trackingId-2": 0, "trackingId-3": 0, "trackingId-4": 0, "trackingId-5": 0, "trackingId-6": 0, "trackingId-7": 0, "trackingId-8": 0, "trackingId-9": 0, "trackingId-10": 0}};
    var User_event = {"totalEventsCaptured":0,"eventsCapturedByTrackingIds":{"trackingId-1": 0, "trackingId-2": 0, "trackingId-3": 0, "trackingId-4": 0, "trackingId-5": 0, "trackingId-6": 0, "trackingId-7": 0, "trackingId-8": 0, "trackingId-9": 0, "trackingId-10": 0}};
    var logout = {"totalEventsCaptured":0,"eventsCapturedByTrackingIds":{"trackingId-1": 0, "trackingId-2": 0, "trackingId-3": 0, "trackingId-4": 0, "trackingId-5": 0, "trackingId-6": 0, "trackingId-7": 0, "trackingId-8": 0, "trackingId-9": 0, "trackingId-10": 0}};

    // print all lines
    lines.forEach((line) => {
        // console.log(line);
        line_count++;
        if(line_count == 1 || line == "")
        {
            return;
        }
        log_time_hour = line.split(",")[2].split(":")[0].toString().substr(1);
        log_time_min = line.split(",")[2].split(":")[1];
        log_time_sec = line.split(",")[2].split(":")[2].toString();
        l = log_time_sec.length;
        log_time_sec = log_time_sec.substr(0,l-1)
        if((log_time_hour == time_hour) && (log_time_min >= time_min - 10) && (log_time_sec >= time_sec - 10))
        {
            // console.log(line.split(",")[1])
            // console.log(line.split(",")[0].toString())
            if(line.split(",")[0] === '"signup"')
            {
                // console.log(line.split(",")[1])
                signup["totalEventsCaptured"] += 1;
                switch(line.split(",")[1]){
                    case '"INF-yj562hjojzbtez"':
                        signup["eventsCapturedByTrackingIds"]["trackingId-1"] += 1;
                        break;
                    case '"INF-3gbfcjjsd6vhvo"':
                        signup["eventsCapturedByTrackingIds"]["trackingId-2"] += 1;
                        break;
                    case '"INF-ixpktk3itsk86"':
                        signup["eventsCapturedByTrackingIds"]["trackingId-3"] += 1;
                        break;
                    case '"INF-1bi5qk0zocqcz"':
                        signup["eventsCapturedByTrackingIds"]["trackingId-4"] += 1;
                        break;
                    case '"INF-1bi6qk0zocqce"':
                        signup["eventsCapturedByTrackingIds"]["trackingId-5"] += 1;
                        break;    
                    case '"INF-ixpktk5itsk68"':
                        signup["eventsCapturedByTrackingIds"]["trackingId-6"] += 1;
                        break;
                    case '"INF-ixpktk3itsk98"':
                        signup["eventsCapturedByTrackingIds"]["trackingId-7"] += 1;
                        break;
                    case '"INF-ixpktk3itsk97"':
                        signup["eventsCapturedByTrackingIds"]["trackingId-8"] += 1;
                        break;
                    case '"INF-ixpktk3itsk96"':
                        signup["eventsCapturedByTrackingIds"]["trackingId-9"] += 1;
                        break;
                    case '"INF-ixpktk3itsk95"':
                        signup["eventsCapturedByTrackingIds"]["trackingId-10"] += 1;
                        break;
                        
                }
            }
            if(line.split(",")[0] === '"User-event"')
            {
                // console.log(line.split(",")[1])
                User_event["totalEventsCaptured"] += 1;
                switch(line.split(",")[1]){
                    case '"INF-yj562hjojzbtez"':
                        User_event["eventsCapturedByTrackingIds"]["trackingId-1"] += 1;
                        break;
                    case '"INF-3gbfcjjsd6vhvo"':
                        User_event["eventsCapturedByTrackingIds"]["trackingId-2"] += 1;
                        break;
                    case '"INF-ixpktk3itsk86"':
                        User_event["eventsCapturedByTrackingIds"]["trackingId-3"] += 1;
                        break;
                    case '"INF-1bi5qk0zocqcz"':
                        User_event["eventsCapturedByTrackingIds"]["trackingId-4"] += 1;
                        break;
                    case '"INF-1bi6qk0zocqce"':
                        User_event["eventsCapturedByTrackingIds"]["trackingId-5"] += 1;
                        break;    
                    case '"INF-ixpktk5itsk68"':
                        User_event["eventsCapturedByTrackingIds"]["trackingId-6"] += 1;
                        break;
                    case '"INF-ixpktk3itsk98"':
                        User_event["eventsCapturedByTrackingIds"]["trackingId-7"] += 1;
                        break;
                    case '"INF-ixpktk3itsk97"':
                        User_event["eventsCapturedByTrackingIds"]["trackingId-8"] += 1;
                        break;
                    case '"INF-ixpktk3itsk96"':
                        User_event["eventsCapturedByTrackingIds"]["trackingId-9"] += 1;
                        break;
                    case '"INF-ixpktk3itsk95"':
                        User_event["eventsCapturedByTrackingIds"]["trackingId-10"] += 1;
                        break;
                        
                }
            }
            if(line.split(",")[0] === '"logout"')
            {
                // console.log(line.split(",")[1])
                logout["totalEventsCaptured"] += 1;
                switch(line.split(",")[1]){
                    case '"INF-yj562hjojzbtez"':
                        logout["eventsCapturedByTrackingIds"]["trackingId-1"] += 1;
                        break;
                    case '"INF-3gbfcjjsd6vhvo"':
                        logout["eventsCapturedByTrackingIds"]["trackingId-2"] += 1;
                        break;
                    case '"INF-ixpktk3itsk86"':
                        logout["eventsCapturedByTrackingIds"]["trackingId-3"] += 1;
                        break;
                    case '"INF-1bi5qk0zocqcz"':
                        logout["eventsCapturedByTrackingIds"]["trackingId-4"] += 1;
                        break;
                    case '"INF-1bi6qk0zocqce"':
                        logout["eventsCapturedByTrackingIds"]["trackingId-5"] += 1;
                        break;    
                    case '"INF-ixpktk5itsk68"':
                        logout["eventsCapturedByTrackingIds"]["trackingId-6"] += 1;
                        break;
                    case '"INF-ixpktk3itsk98"':
                        logout["eventsCapturedByTrackingIds"]["trackingId-7"] += 1;
                        break;
                    case '"INF-ixpktk3itsk97"':
                        logout["eventsCapturedByTrackingIds"]["trackingId-8"] += 1;
                        break;
                    case '"INF-ixpktk3itsk96"':
                        logout["eventsCapturedByTrackingIds"]["trackingId-9"] += 1;
                        break;
                    case '"INF-ixpktk3itsk95"':
                        logout["eventsCapturedByTrackingIds"]["trackingId-10"] += 1;
                        break;
                        
                }
            }
        }
    });
    console.log("*********************************");
    console.log("signup Event Analytics : \n",signup);
    console.log("*********************************");
    console.log("User-event Event Analytics : \n",User_event);
    console.log("*********************************");
    console.log("logout Event Analytics : \n",logout);
    console.log("*********************************");

} catch (err) {
    console.error(err);
}
