#!/usr/bin/env node
'use strict';

import * as fs from 'fs';
import {statSync} from "fs";
import * as path from "path";

const fileIndex = process.argv.indexOf('-f');

let filePath = null;

if(fileIndex > 1){
  filePath = process.argv[fileIndex + 1];
  if(!filePath){
    console.error('Please pass a file path after the -f argument.');
    process.exit(1);
  }
}



const run = (z: any) => {
  
  const isArray = Array.isArray(z);
  
  if (isArray) {
    process.stdout.write('[');
  } else {
    process.stdout.write('{');
  }
  
  const keys = Object.keys(z);
  
  let i = 0, isAllClean = true;
  
  for (let k of keys) {
    if (!/^[a-z0-9_]+$/i.test(k)) {
      isAllClean = false;
      break;
    }
  }
  
  for (let k of keys) {
    
    i++;
    
    let v = z[k];
    
    if(!isArray){
      
      if (isAllClean) {
        process.stdout.write(k);
      } else if (/'/.test(k)) {
        process.stdout.write('"' + k + '"');
      } else {
        process.stdout.write("'" + k + "'");
      }
  
      process.stdout.write(':');
      
    }

    
    
    if (v && typeof v === 'object') {
      run(v);
      
      if (i < keys.length) {
        process.stdout.write(',');
      }
      
      continue;
    }
    
    
    if (typeof v === 'string') {
      process.stdout.write("'" + v + "'");
    } else {
      process.stdout.write(String(v));
    }
    
    if (i < keys.length) {
      process.stdout.write(',');
    }
    
    
  }
  
  if (isArray) {
    process.stdout.write(']');
  } else {
    process.stdout.write('}');
  }
  
};


if(filePath){
  
  const f = path.isAbsolute(filePath)? filePath : path.resolve(process.cwd() + '/' + filePath);
  
  try{
    if(!statSync(f).isFile()){
      throw `The following path is not a file: ${f}`
    }
  }
  catch (e) {
    console.error(e.message);
    process.exit(1);
  }
  
  
  const r = require(f);
  
  if (!(r && typeof r === 'object')) {
    console.log(r);
    process.exit(0);
  }
  
  run(r);
  process.exit(0);
}


const stdin = {
  data: ''
};

process.stdin.resume().on('data', d => {
   stdin.data += d;
});

process.stdin.once('end', () => {
  let x  = null;
  console.log(stdin.data);
  eval('x = ' + stdin.data);
  run(x);
});





