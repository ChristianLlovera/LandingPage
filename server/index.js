require("@babel/register")
const functions = require('firebase-functions')
const server = require('./_server')


exports.server = functions.https.onRequest(server)