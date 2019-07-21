'use strict';

const r1 = /\s+'[^ "]+'[ ]*:/g;

const r2 = /\s+"[^ ']+"[ ]*:/g;

const r3 = /:[ ]*"[^']*"[^"']/g;

// const r = /^4444$/;

export const run = (v: any) => {
  
  console.log(v);
  
  v = v.replace(r1, (m: string) => {
    const first = m.indexOf("'");
    const lst = m.lastIndexOf("'");
    return m.slice(first+1, lst) + ':';
  });
  
  
  v = v.replace(r2, (m: string) => {
    const first = m.indexOf('"');
    const lst = m.lastIndexOf('"');
    return m.slice(first+1, lst) + ':';
  });
  
  
  v = v.replace(r3, (m: string) => {
    const first = m.indexOf('"');
    const lst = m.lastIndexOf('"');
    return ": '" + m.slice(first+1, lst) + "'";
  });
  
  //''EBUG",
  
  console.log(v);
  
};
