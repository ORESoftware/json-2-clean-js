#!/usr/bin/env node
'use strict';

import * as fs from 'fs';
import {statSync} from "fs";
import * as path from "path";
import * as fromFile from './from-file';
import * as fromInputStr from './from-input-str';
import * as fromStdin from './from-stdin';

const fileIndex = process.argv.indexOf('-f');
const inputStrIndex = process.argv.indexOf('-i');

let filePath = null;

if (fileIndex > 1) {
  if (inputStrIndex > 1) {
    throw 'Please pass only one of -i or -f options. -f is for a file, -i is for a raw string.';
  }
  
  filePath = process.argv[fileIndex + 1];
  if (!filePath) {
    console.error('Please pass a file path after the -f argument.');
    process.exit(1);
  }
}

if (filePath) {
  
  const f = path.isAbsolute(filePath) ? filePath : path.resolve(process.cwd() + '/' + filePath);
  
  try {
    if (!statSync(f).isFile()) {
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
  
  fromFile.run(r);
  process.exit(0);
}

if (inputStrIndex) {
  fromInputStr.run(null);
  process.exit(0);
}

const stdin = {
  data: ''
};

process.stdin.resume().on('data', d => {
  stdin.data += d;
});

process.stdin.once('end', () => {
  let x = null;
  console.log(stdin.data);
  eval('x = ' + stdin.data);
  fromStdin.run(x);
});





