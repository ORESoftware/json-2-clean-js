
<div align="right">

Travis build status:
[![Build Status](https://travis-ci.org/ORESoftware/typescript-library-skeleton.svg?branch=master)](https://travis-ci.org/ORESoftware/typescript-library-skeleton)

CircleCI build status:
[![CircleCI](https://circleci.com/gh/ORESoftware/typescript-library-skeleton/tree/master.svg?style=svg)](https://circleci.com/gh/ORESoftware/typescript-library-skeleton/tree/master)

</div>

## Create clean JS from JSON

No extra strings and ugly stuff. Single quotes instead of double where possible.


### Usage

>
>  Read from a file:
>
>```
> $ json-2-clean-js -f package.json    
>```
>


>
>  Read from a string at the command line:
>
>```
> $ json-2-clean-js -i 'input string here'    
>```
>


>
>  Read from stdin at the command line using a heredoc:
>
>```
> $ json-2-clean-js <<H
>     'use a heredoc, it's much much better'
>  H  
>```
>

>
>  Read from stdin at the command line using a herestring:
>
>```
> $ json-2-clean-js <<< 'use a heredoc instead of this, pls'
>```
>



>
>  Or the most obvious way (but not as nice as heredoc)
>
>```
> $ echo 'foo' | json-2-clean-js
>```
>



### Example input/output:


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

