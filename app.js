#!/usr/bin/env node
//var fs = require('fs');

var path = require('path');

//array range [1-100]
var range = Array.from({length: 100}, (v, k) => k+1); 

//generate random numbers [1-100]
console.log(Math.ceil(Math.random()*100));