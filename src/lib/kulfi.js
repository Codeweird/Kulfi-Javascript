// import dependencies
import { concat } from '../util/string';
// return Kulfi class
var fireEventMg;
export class Kulfi{
    constructor(apikey, app, url){
        this.apikey = apikey;       
        this.url = url;       
        this.initialized = false;
		this.ws;
		fireEventMg=this;
		this.hasMessages = false;
		this.connected = false;
		this.appName = app;
    }
    // initialize plugin

    init() {      
		console.log("Connecting...");
		this.ws = new WebSocket(this.url);
		this.initWebSocketsEvents();
		this.initialized = true;                
    }
	// get fullname of the user
    initWebSocketsEvents() {
        this.ws.onopen = function () {
            console.log('Connection is opened (connected...)');
            this.connected = true;
        };

        this.ws.onmessage = function (evt) {
  			let data = JSON.parse(evt.data);
			fireEventMg.fireEvent(data.channel,data.message);
        };

        this.ws.onclose = function () {
            this.connected = false;
            console.log('Connection is closed...');
        };

        this.ws.onerror = function (error) {
            console.error(error);
            console.log('Error occurred, check the console!');
        };
    }
	
	push(channelName,data){
		let message = data;
        let channel = channelName;		
		this.ws.send(JSON.stringify({app: this.appName, message, channel}));
	
	}
	
	listen(type, method, scope, context) {
        var listeners, handlers;
        if (!(listeners = this.listeners)) {
            listeners = this.listeners = {};
        }
        if (!(handlers = listeners[type])){
            handlers = listeners[type] = [];
        }
        scope = (scope ? scope : window);
        handlers.push({
            method: method,
            scope: scope,
            context: (context ? context : scope)
        });
    } 

	fireEvent(type, data, context) {
        var listeners, handlers, i, n, handler, scope;
        if (!(listeners = this.listeners)) {
            return;
        }
        if (!(handlers = listeners[type])){
            return;
        }
        for (i = 0, n = handlers.length; i < n; i++){
            handler = handlers[i];
            if (typeof(context)!=="undefined" && context !== handler.context) continue;
            if (handler.method.call(
                handler.scope, this, type, data
            )===false) {
                return false;
            }
        }
        return true;
    }	
}