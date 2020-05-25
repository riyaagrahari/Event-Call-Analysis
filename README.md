# Event-Call-Analysis
## Functionality of each file are described as follows:
config.json - config file which has input parameter `rate_of_event`, `value of last N minutes` for which analysis is to be done

`index.js` - main file which takes input parameter, loops for calling events as per rate mentioned,

`output.log` - events called get stored in this file along with tracking Id and timestamp.
The loop is called after every 1 second of time

`input.json` -  stores event type, event details, tracking ID and tracking ID details.

`analytics.js` - will give you analysis of last N minutes of the logs

The main file `index.js` randomly assigns tracking Id to 3 different types of events at the rate mentioned in `config.json` file. For example: 100 event calls per second. The function to call events is triggered every second and the details for different types of function and 10 different tracking IDs is mentioned in `input.json`. Timestamp is also assigned to each event triggered which is helpful in log analysis.

Analysis file `analytics.js` analysises last N minutes logs ( N is configured in `config.json`) and gives analytics for each event by giving details about (Total Event Captured and No. of event calls by particular tracking Id) per Event type.

For example: Data captured for any event type, would have a summary of last five minutes,
something like - signup = {totalEventsCaptured: 50,
eventsCapturedByTrackingIds:{trackingIdA: 10, trackingIdB: 20, trackingIdC: 20}}

## Steps for Running the App
- Replace output.log content with this line for getting your own log

  `"Event_type","Tracking_ID","Timestamp"`

- Run index.js for calling the functions

- Run analytics.js for getting the analytics


## Analytics Output Screenshots
<img width="1680" alt="Screenshot 2020-05-24 at 21 03 33" src="https://user-images.githubusercontent.com/24872414/82759172-42277d80-9e09-11ea-9bf6-29bd13bc820e.png">
<img width="1680" alt="Screenshot 2020-05-24 at 21 03 41" src="https://user-images.githubusercontent.com/24872414/82759184-4784c800-9e09-11ea-901a-479ec23166a1.png">
