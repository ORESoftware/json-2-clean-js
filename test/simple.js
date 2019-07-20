#!/usr/bin/env node

const cp = require('child_process');
const path = require('path');
const fs = require('fs');
const http = require('http');
const assert = require('assert');
const EE = require('events');
const strm = require('stream');

console.log('your simple node.js test goes here.');


const z = {
  name: 'json-2-clean-js',
  version: '0.0.1001',
  description: 'Semver-oriented TypeScript library skeleton.',
  main: 'dist/main.js',
  bin: {'json-2-clean-js': 'cli/json-2-clean-js.js'},
  types: 'dist/main.d.ts',
  typings: 'dist/main.d.ts',
  scripts: {test: 'suman test', postinstall: './assets/postinstall.sh', xyz: './scripts/npm/xyz.sh'},
  repository: {type: 'git', url: 'git+https://github.com/ORESoftware/typescript-library-skeleton.git'},
  keywords: ['typescript', 'library', 'skeleton', 'scaffold', {roomba: 'chicken'}],
  author: 'YOUR NAME HERE',
  license: 'SEE LICENSE IN license.md',
  bugs: {url: 'https://github.com/ORESoftware/typescript-library-skeleton/issues'},
  homepage: 'https://github.com/ORESoftware/typescript-library-skeleton#readme',
  dependencies: {},
  devDependencies: {'@types/node': '^10.12.10', 'typescript': '^3.4.5'}
}
