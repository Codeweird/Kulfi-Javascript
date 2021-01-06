# Kulfi-Javascript
Real-time API gateway for next-gen apps

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Installation
Preferred way to install is with npm.

```bash
 npm install kulfi-api
```
or

You can add js from our CDN.

```html
   <script src="https://kulfi.app/libraries/js/kulfi.js"></script>
```

## Bringing Real-time data to your apps

- Initiate Kulfi Client

```javascript
instance = new Kulfi("APIKEY","APPNAME","APIURLHERE");
instance.init();
```

- Listening for real-time data through channels.

```javascript
instance.listen("CHANNELNAME", function(observable, eventType, data){
		console.log("Data Received", data);				
});

//example
instance.listen("home/Score", function(observable, eventType, data){
		console.log("Latest Score", data);				
});

```

- Push real-time data to all connected clients through channels

```javascript
instance.push("CHANNELNAME","VALUE");

//example
instance.push("home/Score",document.getElementById("score").value);
```

You're app is now real-time without any web server and DB. 


## Other Platform Libraries
Available for Android & PHP as of now
