"use strict";

var config = require("../config");
var sendgrid = require("@sendgrid/mail");

exports.send = async (to, subject, body) => {
  sendgrid.setApiKey(config.sendgridKey);
  sendgrid.send({
    to: to,
    from: "xaguiar@live.com",
    subject: subject,
    text: "Bem vindo!",
    html: body,
  });
};
