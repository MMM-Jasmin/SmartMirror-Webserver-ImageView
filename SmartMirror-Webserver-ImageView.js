/**
 * @file smartmirror-center-display.js
 *
 * @author nkucza
 * @license MIT
 *
 * @see  https://github.com/MMM-Jasmin/SmartMirror-Webserver-ImageView
 */

 Module.register('SmartMirror-Webserver-ImageView',{

	defaults: {
		image_height: 1280,
		image_width: 720,
		rotation: 0.0,
		port: 7778,
		forgroundFPS: 30,
		backgroundFPS: 5,
		ai_art_mirror: true,	
		debug: false	
	},

	start: function() {
		self = this;
	
		this.sendSocketNotification('CONFIG', this.config);	

		Log.info('Starting module: ' + this.name);

        this.updateDom();

	},

	getDom: function () {

		Log.info('REFRESH DOM:  ' + this.name);
		var wrapper = document.createElement("div");
		wrapper.className = "video";

        wrapper.innerHTML = "<iframe width=\"" + this.config.image_width + "\" height=\"" + this.config.image_height + "\" src=\"http://0.0.0.0:"+ this.config.port +"\" frameborder=\"0\" allowfullscreen></iframe>";
        //wrapper.innerHTML = "<iframe width=\"" + this.config.width +"\" height=\"" + this.config.height + "\" src=\"http://0.0.0.0:5000/video_feed\" frameborder=\"0\" allowfullscreen></iframe>";

        wrapper.style.width="1080px";
        wrapper.style.height="1920px";
		return wrapper;

	},

	suspend: function(){
		//this.sendNotification(this.config.publischerName + "SetFPS", this.config.backgroundFPS);
	},

	resume: function(){
		//this.sendNotification(this.config.publischerName + "SetFPS", this.config.forgroundFPS);
        this.updateDom();
	},


	notificationReceived: function(notification, payload) {
		const self = this;
	},
	
	// Override socket notification handler.
	socketNotificationReceived: function(notification, payload) {
		const self = this;
	},


    getStyles: function () {
        return ['style.css'];
    }

});