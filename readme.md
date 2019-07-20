
<div align="right">

Travis build status:
[![Build Status](https://travis-ci.org/ORESoftware/typescript-library-skeleton.svg?branch=master)](https://travis-ci.org/ORESoftware/typescript-library-skeleton)

CircleCI build status:
[![CircleCI](https://circleci.com/gh/ORESoftware/typescript-library-skeleton/tree/master.svg?style=svg)](https://circleci.com/gh/ORESoftware/typescript-library-skeleton/tree/master)

</div>

## Create clean JS from JSON

No extra strings and ugly stuff. Single quotes instead of double where possible.


### Usage

```bash

$ json-2-clean-js package.json

```


Input:

```json

{
  "name": "json-2-clean-js",
  "version": "0.0.1001",
  "description": "Semver-oriented TypeScript library skeleton.",
  "main": "dist/main.js",
  "bin": {
    "json-2-clean-js": "cli/json-2-clean-js.js"
  },
  "types": "dist/main.d.ts",
  "typings": "dist/main.d.ts",
  "scripts": {
    "test": "suman test",
    "postinstall": "./assets/postinstall.sh",
    "xyz": "./scripts/npm/xyz.sh"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/ORESoftware/typescript-library-skeleton.git"
  },
  "keywords": [
    "typescript",
    "library",
    "skeleton",
    "scaffold"
  ],
  "author": "YOUR NAME HERE",
  "license": "SEE LICENSE IN license.md",
  "bugs": {
    "url": "https://github.com/ORESoftware/typescript-library-skeleton/issues"
  },
  "homepage": "https://github.com/ORESoftware/typescript-library-skeleton#readme",
  "dependencies": {},
  "devDependencies": {
    "@types/node": "^10.12.10",
    "typescript": "^3.4.5"
  }
}



```

and the output:


```js

const val = {
  name: 'json-2-clean-js',
  version: '0.0.1001',
  description: 'Semver-oriented TypeScript library skeleton.',
  main: 'dist/main.js',
  bin: {'json-2-clean-js': 'cli/json-2-clean-js.js'},
  types: 'dist/main.d.ts',
  typings: 'dist/main.d.ts',
  scripts: {test: 'suman test', postinstall: './assets/postinstall.sh', xyz: './scripts/npm/xyz.sh'},
  repository: {type: 'git', url: 'git+https://github.com/ORESoftware/typescript-library-skeleton.git'},
  keywords: ['typescript', 'library', 'skeleton', 'scaffold'],
  author: 'YOUR NAME HERE',
  license: 'SEE LICENSE IN license.md',
  bugs: {url: 'https://github.com/ORESoftware/typescript-library-skeleton/issues'},
  homepage: 'https://github.com/ORESoftware/typescript-library-skeleton#readme',
  dependencies: {},
  devDependencies: {'@types/node': '^10.12.10', 'typescript': '^3.4.5'}
};


```


The idea is to easily get rid of unncessary quotes lulz.

