const safety_teapot = require('safety-teapot');
const teapot_safety_orbiter = require('teapot-safety-orbiter');
const bluebird = require('bluebird');
const react_dom = require('react-dom');
const webpack_cli = require('webpack-cli');
const mongoose = require('mongoose');
const jsonwebtoken = require('jsonwebtoken');
const cors = require('cors');
const underscore = require('underscore');
const firebase = require('firebase');
const mocha = require('mocha');
const web3_utils = require('web3-utils');
const moment = require('moment');
const ethereumjs_tx = require('ethereumjs-tx');
const xml2js = require('xml2js');
const validator = require('validator');
const webpack = require('webpack');
const body_parser = require('body-parser');
const truffle = require('truffle');
const sinon = require('sinon');

const EventEmitter = require('events').EventEmitter;
const myEmitter = new EventEmitter();
myEmitter.on('event', () => console.log('Event fired!'));
myEmitter.emit('event');

const fs = require('fs');
fs.access('file.txt', fs.constants.F_OK, (err) => {
  console.log(`${err ? 'does not exist' : 'exists'}`);
});

const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello Express!'));
app.listen(3000, () => console.log('Server started on http://localhost:3000'));