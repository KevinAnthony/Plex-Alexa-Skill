'use strict';
var Alexa = require('alexa-sdk');
var APP_ID = undefined;

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('Play');
    },
    'PlayIntent': function () {
        this.emit('Play');
    },
    'PauseIntent': function () {
        this.emit('Pause');
    },
    'StopIntent': function () {
        this.emit('Stop');
    },
    'Play': function () {
        this.emit(':tell', 'Reached Play Funtion')
    },
    'Pause': function () {
        this.emit(':tell', 'Reached Pause Funtion')
    },
    'Stop': function () {
        this.emit(':tell', 'Reached Stop Funtion')
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = this.t("HELP_MESSAGE");
        var reprompt = this.t("HELP_MESSAGE");
        this.emit(':ask', speechOutput, reprompt);
    },
        'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    },
        'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    }
