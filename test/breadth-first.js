

const q = [];

const bf = (z) => {

  for(let [k,v] of Object.entries(z)){
    
    console.log(k);
    
    q.push(() => {
      
      console.log(k,v);
      if(v && typeof v === 'object'){
        bf(v);
      }
      else{
        console.log(v);
      }
      
    });
  }

  const s = q.shift();
  s && s();

};


bf({
  
  a: 1,
  b: {
    c: 5,
    d: 6
  },
  e: {
     f: 8,
     g: 9
  },
  h: 2,
  i: 3,
  k: 4
  
});
