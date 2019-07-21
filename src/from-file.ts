'use strict';

export const run = (z: any) => {
  
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
