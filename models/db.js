/**
 * Created by yang on 2015/4/2.
 */
var mongoPort = 27017;
var settings = require("../settings");
var Db = require("mongodb").Db;
var Server = require("mongodb").Server;

module.exports = new Db(settings.db, new Server(settings.host,mongoPort,{},{safe:true}));

